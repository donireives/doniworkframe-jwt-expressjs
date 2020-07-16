import jwt from "jsonwebtoken"
import moment from "moment";

export default class AuthToken {
    private _token: string;
    private _secret: string;
    private _data: any;
    private _nearExp: boolean;

    constructor(token: string = "") {
        this._token = token
        this._secret = 'asdasdasd'
        this._nearExp = false;
    }

    isValid() {
        try {
            if (this._token === "") return false;
            this._data = jwt.verify(this._token, this._secret)
            
            return this.isActiveToken()
        } catch (e) {
            // throw new HTTP401Error()
        }
    }

    create(params: any) {
        delete params['iat'];
        delete params['exp'];

        return jwt.sign(params, this._secret, {
            expiresIn: 604800
        })
    }

    isActiveToken() {
        if (!this._data) return false;

        const exp = moment.unix(this._data.exp)
        const diff = exp.diff(moment.now())
        const hours = exp.diff(moment.now(), 'hours')
        
        if (hours < 24) this._nearExp = true
        
        return diff.valueOf() > 0
    }

    get newToken(): string {
        return this.create(this._data)
    }

    get userData(): Object | undefined {
        return this._data
    }

    get nearExp(): boolean {
        return this._nearExp
    }
}