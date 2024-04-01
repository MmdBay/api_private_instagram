import { Injectable } from '@nestjs/common';
import Wizgeram from '../../modules/userPageData.module';


@Injectable()
export class UserService {
    async userMain(userName: string, sessionName: string): Promise<any> {
        const wiz = new Wizgeram(userName, sessionName);
        const data = await wiz.userInfo();
        return { data };
    }
}
