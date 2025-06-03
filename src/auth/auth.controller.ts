import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DoctorRegistrationInput } from './dtos/doctor-registration.input';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ResetPasswordDto } from './dtos/resetpassword.dto';
import { LoginInputDto } from './dtos/login-input.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }
  @Post('registerPatient')
  async register(@Body() registrationInput : any) {
    return this.authService.registerPatient(registrationInput);
  }

  @Post('registerDoctor')
  async registerDoctor(@Body() registrationInput: DoctorRegistrationInput) {
    return this.authService.registerDoctor(registrationInput);
  }

  @Post('sendverification/:email')
  async sendVerification(@Param('email') email: string) {
    return this.authService.sendVerificationCode(email);
  }

  @Post('mailverification/:email/:token')
  async mailVerification(@Param('token') token: string,@Param('email') EmailAddress: string) {
    return this.authService.verifyEmail(EmailAddress, token);

  }

  @Post('getResetPasswordMail/:email')
  async getResetPasswordMail(@Param('email') email: string) {
    return this.authService.getResetPasswordMail(email);
  }

  @Post('verifyResetPasswordMail/:email/:token')
  async verifyResetPasswordMail(@Param('email') email: string, @Param('token') token: string) {
    return this.authService.verifyResetPasswordMail(email, token);
  }
  @Post('resetPassword/:email')
  async resetPassword(@Param('email') email: string, @Body() body: ResetPasswordDto) {
    const token = body.token;
    const password = body.password;
    return this.authService.resetPassword(email, password, token);
  }

  @Post('login')
  async login(@Body() body: LoginInputDto) {
    const email = body.email;
    const password = body.password;

    return this.authService.login(email, password);
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  async getStatus(@Req() req :any) {
    return {
      message: "User is authenticated",
      user : req.user
    };
  }


}
