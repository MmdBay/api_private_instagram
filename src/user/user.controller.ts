import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('suren/api/v1/user')
export class UserController {
 constructor(private readonly userService: UserService) {}

 @Get()
 async user() {
    return this.userService.userFeed();
 }
}
