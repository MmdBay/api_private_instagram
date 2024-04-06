import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('suren/v1/user')
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
