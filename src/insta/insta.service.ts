import * as fs from 'fs';
import * as path from 'path';

import { Injectable, OnModuleInit } from '@nestjs/common';
import { IgApiClient } from 'instagram-private-api';

@Injectable()
export class InstaService implements OnModuleInit {
  private ig: IgApiClient;

  async loginToInsta(userName: string, password: string) {
    console.log(userName, password);

    this.ig.state.generateDevice(userName);

    await this.ig.account.login(userName, password);

    const serialized = await this.ig.state.serialize();
    await fs.promises.writeFile(
      path.resolve(__dirname, `session_${userName}.json`),
      JSON.stringify(serialized),
    );
    console.log(path.resolve(__dirname, `session_${userName}.json`));
  }

  async loadSession(username: string) {
    this.ig.state.generateDevice(username);
    const sessionPath: string = path.resolve(
      __dirname,
      `session_${username}.json`,
    );
    if (fs.existsSync(sessionPath)) {
      const session: string = fs.readFileSync(sessionPath, {
        encoding: 'utf8',
      });
      const client: void = await this.ig.state.deserialize(session);
      return client;
    }
  }

  async getUserInfoById(id: string | number) {
    return this.ig.user.info(id);
  }
  async getUserInfoByUsername(username: string) {
    return this.ig.user.usernameinfo(username);
  }

  getUserCookieId() {
    return this.ig.state.cookieUserId;
  }
  onModuleInit() {
    this.ig = new IgApiClient();
  }
}
