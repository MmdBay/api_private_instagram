import ig from './craetClient.module';
import * as path from 'path';
import { promises as fsPromises } from 'fs';

async function loginToInsta(username: string, password: string) {
    ig.state.generateDevice(username);
  
    await ig.account.login(username, password);
    
    const serialized = await ig.state.serialize();
    console.log(serialized);
    await fsPromises.writeFile(path.resolve(__dirname, 'session.json'), JSON.stringify(serialized));
    console.log(path.resolve(__dirname, 'session.json'))
    
  }

export default loginToInsta