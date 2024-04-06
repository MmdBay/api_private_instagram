import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { InstaModule } from './insta/insta.module';

@Module({
  imports: [LoginModule, UserModule, InstaModule],
  controllers: [LoginController, UserController],
  providers: [UserService, LoginService],
})
export class AppModule {}
