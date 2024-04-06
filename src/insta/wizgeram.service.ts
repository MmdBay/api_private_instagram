import { Injectable } from '@nestjs/common';
import { InstaService } from './insta.service';

@Injectable()
export class WizgeramService {
  constructor(private readonly instaService: InstaService) {}

  async userInfo(
    userName: string,
    sessionName: string,
  ): Promise<object | undefined> {
    try {
      await this.instaService.loadSession(sessionName);
      await this.instaService.getUserInfoById(
        this.instaService.getUserCookieId(),
      );
      const userAccount: any =
        this.instaService.getUserInfoByUsername(userName);

      return userAccount;
    } catch (e) {
      console.error('ERROR Wizgeram Class & userInfo method: ' + e);
    }
  }

  async userData(
    userName: string,
    sessionName: string,
  ): Promise<object | undefined> {
    try {
      await this.instaService.loadSession(sessionName);
      const userInfo = await this.instaService.getUserInfoById(userName);
      const userId = userInfo.pk;
      const detailedUserInfo = await this.instaService.getUserInfoById(userId);
      return detailedUserInfo;
    } catch (e) {
      console.error('ERROR Wizgeram Class & userData method: ' + e);
    }
  }
}
