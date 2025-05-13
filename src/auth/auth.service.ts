import { BadRequestException, ConflictException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {  doctors, patients, Prisma, users, users_role_enum } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma.service';
import { NotFoundError } from 'rxjs';
import { MailerService } from 'src/mailer/mailer.service';
import { VerificationService } from 'src/utils/verification/verification.service';
import { DoctorRegistrationInput } from './dtos/doctor-registration.input';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { PatientRegistrationInput } from './dtos/patient-registration.input';
import { send } from 'process';

@Injectable()
export class AuthService {
    constructor(private readonly prisma : PrismaService,
        private readonly mailerService : MailerService,
        private readonly verificationService : VerificationService,
        private readonly jwtService : JwtService,
        
    ) {}  
    private readonly jwtSecret = "123456789";
    async register(body: any) {

        
        const { role} = body;
        let dtoClass
        if(role === users_role_enum.Doctor) {
            dtoClass = DoctorRegistrationInput;
        }
        else if(role === users_role_enum.Patient) { 
            dtoClass = PatientRegistrationInput;
        }
        else {
            throw new BadRequestException('Invalid role');
        }
        

        const registrationInput: typeof dtoClass = plainToInstance(dtoClass, body) ;

       const errors = await validate(registrationInput, {
            whitelist: true,               // Strips properties that are not in the DTO
            
        });
        if (errors.length > 0) {
            throw new BadRequestException(errors);
        }
        
        const { email, first_name, last_name, password, address, phone,cin , gender, type, specialty , date_of_birth} = registrationInput;

        const salt: string = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const emailExists = await this.prisma.users.findUnique({
            where: { email },
        });
        if (emailExists) {
            throw new ConflictException('Email already exists if you forgot click on forgot password');
        }
        const cinExists = await this.prisma.patients.findUnique({
            where: { cin },
        });
        if (cinExists) {
            throw new ConflictException('Cin already exists');
        }
        
        
        const resultedUser = await this.prisma.$transaction(async (tx) => {
            let user: users;
            try {
                user = await tx.users.create({
                        data: {
                            email,
                            first_name,
                            last_name,
                            password : hashedPassword,
                            salt,
                            address,
                            phone,
                            role,
                            is_verified: false,
                        }});
            } catch (error) {
                console.error('Error creating user:', error);
                throw new BadRequestException('User creation failed');
            }

            if (!user) {
                throw new ConflictException('User creation failed');
            }
            if (role ===  users_role_enum.Patient) {
                let patient : patients;
                try {
                    patient = await tx.patients.create({
                        data: {
                            user_id: user.id,
                            cin : parseInt(cin), 
                            date_of_birth,
                            gender,
                        }
                    });
                } 
                    catch (error) {
                    console.error('Error creating patient:', error);
                    throw new BadRequestException('Patient creation failed');
                }
                await tx.users.update({
                    where: { id: user.id },
                    data: { associated_id: patient.id },
                });
            } else if (role === users_role_enum.Doctor) {
                let doctor: doctors; 
                try {
                    doctor = await tx.doctors.create({
                        data: {
                            users : {
                                connect: {
                                    id: user.id,
                                },
                            },
                            type,
                            specialty,
                            first_name,
                            last_name,
                            is_license_verified: false,
                        },
                    });
                    } catch (error) {
                    console.error('Error creating doctor:', error);
                    throw new BadRequestException('Doctor creation failed');
                    }

                if (!doctor) {
                    throw new ConflictException('Doctor creation failed');
                }

                await tx.users.update({
                    where: { id: user.id },
                    data: { associated_id: doctor.id },
                });
            }
            return user;
            }
        );
    
    
        return {
            message: 'User registered successfully , verify your email',
            email: resultedUser.email,
        };
    }

    async verifyEmail(email: string, verificationCode: string) {
        const user = await this.prisma.users.findUnique({
            where: { email },
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const isValid = await this.verificationService.validateOtp(user.id, verificationCode, user.salt);
        if (!isValid) {
            throw new BadRequestException('Invalid verification code');
        }
        await this.prisma.users.update({
            where: { id: user.id },
            data: { is_verified: true },
        });
        return {
            message: 'Email verified successfully',
        };
    }

    async sendVerificationCode(email: string) {
        const user = await this.prisma.users.findUnique({
            where: { email },
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        
        const verificationCode = await this.verificationService.generateOtp(user.id,6, user.salt);
        
        return this.sendMail(email, verificationCode);
       
    }

    async getResetPasswordMail(email: string) {
        const user = await this.prisma.users.findUnique({
            where: { email },
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const verificationCode = await this.verificationService.generateOtp(user?.id, 6, user?.salt);
        return this.sendMail(email, verificationCode);

    }

    async verifyResetPasswordMail(email: string, verificationCode: string) {
        const user = await this.prisma.users.findUnique({
            where: { email },
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const isValid = await this.verificationService.validateOtp(user.id, verificationCode, user.salt);
        if (!isValid) {
            throw new BadRequestException('Invalid verification code');
        }
        const payload = {"mail" : user.email ,"able_to_reset_password" : true}
        const token = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '1h',
        });
        return {
            message: 'Email verified successfully you can reset your password',
            token,
        };
    }

    async resetPassword(email: string, newPassword: string , token: string) {
        let decodedToken;
        try {
            decodedToken = this.jwtService.verify(token, {
                secret: this.jwtSecret,
            });
        } catch (error) {
            throw new BadRequestException('Invalid token');
        }
        if (!decodedToken || !decodedToken['able_to_reset_password']) {
            throw new BadRequestException('Invalid token');
        }
    
        const user = await this.prisma.users.findUnique({
            where: { email },
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const salt: string = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await this.prisma.users.update({
            where: { id: user.id },
            data: { password: hashedPassword, salt },
        });
        return {
            message: 'Password reset successfully',
        };
    }


    async login(email: string, plainPassword: string) {
        const foundUser = await this.prisma.users.findUnique({
            where: { 
                email,
                is_verified: true,
             },
        });
        if (!foundUser) {
            throw new NotFoundException('User not found');
        }
        const hashedPassword = await bcrypt.hash(plainPassword, foundUser.salt);
        if (hashedPassword !== foundUser.password) {
            throw new BadRequestException('Invalid password');
        }

        const { password, salt, ...userData } = foundUser;

        return {message : "Login successful", user : userData};
    }




    async sendMail(email: string , verificationCode: string) {
        try{
            await this.mailerService.sendMail({
                to: email,
                subject: 'Verification Code',
                html: `<p>Your verification code is <strong>${verificationCode}</strong></p>`,
            });

        }
        catch (error) {
            console.error('Error sending email:', error);
            throw new ConflictException('Failed to send verification email');
        }
        return {
            message: 'Verification code sent successfully to '+ email,
        };
    }


}

