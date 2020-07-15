import {Request, Response} from "express";
import {body, validationResult} from "express-validator";
import {EmailLoginRequest} from "../../entity/request/AuthRequestTypes";

class AuthController {
    public static validatorEmailLogin = [
        body("password")
            .trim()
            .notEmpty().withMessage('Masukan Kata Sandi anda.')
            .customSanitizer((val: string) => 'aaa')
    ];

    public static async loginEmail(req: Request<{}, {}, EmailLoginRequest>, res: Response) {
        
    }
}

export default AuthController;