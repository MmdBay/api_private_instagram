import { Injectable } from '@nestjs/common';
import Wizgeram from '../../modules/userPageData.module';


@Injectable()
export class UserService {
    async userFeed(): Promise<any> {
     const wiz = new Wizgeram('bmw');
    const data = await wiz.userFeed();
    return { data };
 }
}
