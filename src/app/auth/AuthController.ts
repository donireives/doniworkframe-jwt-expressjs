import {Request, Response} from "express";
import {body, validationResult} from "express-validator";
import {EmailLoginRequest} from "../../entity/request/AuthRequestTypes";
import ErrorResponse from "../../entity/response/ErrorResponse";
import SuccessResponse from "../../entity/response/SuccessResponse";

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
                message: validationError.mapped(),
                meta: undefined,
                type: "BODY_ERROR"
            });
        }

        return SuccessResponse.send(res, {
            type: "AUTHENTICATED",
            data: 'asdasd',
            meta: null,
        });

    }
}

export default AuthController;