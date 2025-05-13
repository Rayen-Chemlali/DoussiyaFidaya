import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationInput } from './dtos/registration.input';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    
  }
  @Post('register')
  async register(@Body() registrationInput : any) {
    return this.authService.register(registrationInput);
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
  async resetPassword(@Param('email') email: string, @Body() body: any) {
    const token = body.token;
    const password = body.password;

    return this.authService.resetPassword(email, password, token);
  }

  @Post('login')
  async login(@Body() body: any) {
    const email = body.email;
    const password = body.password;

    return this.authService.login(email, password);
  }
  
}
