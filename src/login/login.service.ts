import { Injectable } from '@nestjs/common';
import loginToInsta from '../../modules/login.Module';

@Injectable()
export class LoginService {
  async login(userName: string, password: string): Promise<any> {
    await loginToInsta(userName, password);
    return {
      message: 'success saved session',
    };
  }
}
