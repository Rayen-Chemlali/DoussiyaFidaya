import { doctors_specialty_enum, doctors_type_enum, patients_gender_enum, users_role_enum } from "@prisma/client";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEmail, IsEnum, IsOptional, IsString, IsUUID, Length } from "class-validator";
import { isRequiredArgument } from "graphql";

export class RegistrationInput {
    
    @IsEmail()
    email: string;

    @IsString()
    @Length(2, 50)
    first_name: string;

    @IsString()
    @Length(2, 50)
    last_name: string;

    @IsString()
  
    //@Length(8, 128)
    password: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsString()
    phone?: string;


    @IsEnum(users_role_enum)
    role: users_role_enum;

}
