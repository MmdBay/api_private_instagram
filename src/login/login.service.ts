import { Injectable } from '@nestjs/common';
import loginToInsta from '../../modules/login.Module';

@Injectable()
export class LoginService {
 async login(username: string, password: string): Promise<any> {
    await loginToInsta(username, password);
    return [1]; // Return appropriate response
 }
}
