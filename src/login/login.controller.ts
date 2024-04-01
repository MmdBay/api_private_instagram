import { Controller, Post, Body, Get } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('suren/v1/auth')
export class LoginController {
   constructor(private readonly loginService: LoginService) { }

   @Post('login')
   async login(@Body('username') userName: string, @Body('password') password: string) {
      console.log(userName, password);
      
      return this.loginService.login(userName, password);
   }
}
