import loadSession from "./loadSession.module"
import ig from "./craetClient.module"

class Wizgeram {
    private userName: string

    constructor(userName: string) {
        this.userName = userName
    }

    async userFeed(): Promise<object | undefined> {
        try {
            await loadSession()
            const userAccount: any = await ig.user.info(ig.state.cookieUserId)
            return userAccount
        } catch (e) {
            console.error('ERROR Wizgeram Class & user method: '+ e)
        }
    }

    async userData(): Promise<object | undefined> {
        try {
            const session = await loadSession()
            console.log(session);
            
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