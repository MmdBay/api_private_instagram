import loadSession from "./loadSession.module"
import ig from "./craetClient.module"

class Wizgeram {
    private readonly userName: string
    private readonly sessionName: string

    constructor(userName: string, sessionName: string) {
        this.userName = userName,
        this.sessionName = sessionName
    }
    
    async userInfo(): Promise<object | undefined> {
        try {
            await loadSession(this.sessionName)
            await ig.user.info(ig.state.cookieUserId)
            const userAccount: any = ig.user.usernameinfo(this.userName)
            
            return userAccount
        } catch (e) {
            console.error('ERROR Wizgeram Class & userInfo method: '+ e)
        }
    }
    
    async userData(): Promise<object | undefined> {
        try {
            await loadSession(this.sessionName)            
            const userInfo = await ig.user.info(this.userName);
            const userId = userInfo.pk;
            const detailedUserInfo = await ig.user.info(userId);
            return detailedUserInfo
        } catch (e) {
            console.error('ERROR Wizgeram Class & userData method: '+ e)
        }
    }
}

export default Wizgeram