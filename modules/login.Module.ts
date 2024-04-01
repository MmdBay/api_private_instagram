import ig from './craetClient.module';
import * as path from 'path';
import { promises as fsPromises } from 'fs';

async function loginToInsta(userName: string, password: string) {
  console.log(userName, password);
  
    ig.state.generateDevice(userName);
  
    await ig.account.login(userName, password);
    
    const serialized = await ig.state.serialize();
    await fsPromises.writeFile(path.resolve(__dirname, `session_${userName}.json`), JSON.stringify(serialized));
    console.log(path.resolve(__dirname, `session_${userName}.json`))
    
  }

export default loginToInsta