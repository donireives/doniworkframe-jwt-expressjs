import jwt from "jsonwebtoken"
import moment from "moment";

export default class AuthToken {
    private jwtToken: string;
    private jwtKey: string;
    private jwtData: any;
    private jwtExp: boolean;

    constructor(token: string = "") {
        this.jwtToken = token
        this.jwtKey = 'asdasdasd'
        this.jwtExp = false;
    }

    isValid() {
        try {
            if (this.jwtToken === "") return false;
            this.jwtData = jwt.verify(this.jwtToken, this.jwtKey)
            
            return this.isActiveToken()
        } catch (e) {
            // throw new HTTP401Error()
        }
    }

    create(params: any) {
        delete params['iat'];
        delete params['exp'];

        return jwt.sign(params, this.jwtKey, {
            expiresIn: 604800
        })
    }

    isActiveToken() {
        if (!this.jwtData) return false;

        const exp = moment.unix(this.jwtData.exp)
        const diff = exp.diff(moment.now())
        const hours = exp.diff(moment.now(), 'hours')
        
        if (hours < 24) this.jwtExp = true
        
        return diff.valueOf() > 0
    }

    get newToken(): string {
        return this.create(this.jwtData)
    }

    get userData(): Object | undefined {
        return this.jwtData
    }

    get nearExp(): boolean {
        return this.jwtExp
    }
}