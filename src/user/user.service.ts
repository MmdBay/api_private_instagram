import { Injectable } from '@nestjs/common';
import { WizgeramService } from 'src/insta/wizgeram.service';

@Injectable()
export class UserService {
  constructor(private readonly wizgeramService: WizgeramService) {}
  async userMain(userName: string, sessionName: string): Promise<any> {
    const data = await this.wizgeramService.userInfo(userName, sessionName);
    return { data };
  }
}
