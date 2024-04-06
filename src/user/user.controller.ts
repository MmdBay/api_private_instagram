import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('info')
  async user(
    @Body('session_name') sessionName: string,
    @Body('username') userName: string,
  ) {
    return this.userService.userMain(userName, sessionName);
  }
}
