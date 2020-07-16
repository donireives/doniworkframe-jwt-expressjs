import {Request, Response} from "express";
import {body, validationResult} from "express-validator";
import {EmailLoginRequest} from "../../entity/request/AuthRequestTypes";
import SuccessResponse from "../../entity/response/SuccessResponse";
import ErrorResponse from "../../entity/response/ErrorResponse";
import CheckJwt from "../../middleware/checkJwt";

class AuthController {
    public static validatorEmailLogin = [
        body('email')
            .trim()
            .notEmpty().withMessage("email needed.")
            .isEmail().withMessage('email not valid.'),
        body("password")
            .trim()
            .notEmpty().withMessage('password needed.')
    ];

    public static async loginEmail(req: Request<{}, {}, EmailLoginRequest>, res: Response) {
        const validationError = validationResult(req);
        
        if (!validationError.isEmpty()) {
            return ErrorResponse.send(res, {
                status: false,
                type: "BODY_ERROR",
                message: validationError.mapped(),
            });
        }

        let x: any = {
            id_user: 7,
            name: 'doni'
        };

        const checkJwt = new CheckJwt()
        const token = checkJwt.create(x)

        return SuccessResponse.send(res, {
            status: true,
            type: "AUTHENTICATED",
            data: token,
        });
    }    
}

export default AuthController;