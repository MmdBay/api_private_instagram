import { Injectable } from '@nestjs/common';
import { InstaService } from 'src/insta/insta.service';

@Injectable()
export class LoginService {
  constructor(private readonly instaService: InstaService) {}
  async login(userName: string, password: string): Promise<any> {
    await this.instaService.loginToInsta(userName, password);
    return {
      message: 'success saved session',
    };
  }
}
