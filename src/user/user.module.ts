import { Module } from '@nestjs/common';
import { InstaModule } from 'src/insta/insta.module';
import { UserService } from './user.service';

@Module({
  imports: [InstaModule],
  providers: [UserService],
})
export class UserModule {}
