import { Module } from '@nestjs/common';
import { InstaModule } from 'src/insta/insta.module';
import { LoginService } from './login.service';

@Module({
  imports: [InstaModule],
  providers: [LoginService],
})
export class LoginModule {}
