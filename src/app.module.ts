import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [LoginModule, UserModule],
  controllers: [LoginController, UserController],
  providers: [UserService, LoginService],
})
export class AppModule {}
