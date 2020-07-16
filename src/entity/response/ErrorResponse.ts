import {Response} from "express";
import {IErrorResponse, TypeOfError} from "./response/ErrorResponseTypes";

class ErrorResponse {
    public static send<MES = any, M = any>(res: Response<IErrorResponse<MES, M>>, body: { type: TypeOfError, message: MES, meta: M }) {
        let httpCode;

        switch (body.type) {
            case "SERVER_ERROR":
                httpCode = 500;
                break;
            case "BODY_ERROR":
                httpCode = 422;
                break;
            case "FAILED_AUTHENTICATION":
                httpCode = 401;
                break;
            case "ENTITY_NOT_FOUND":
                httpCode = 404;
                break;
        }

        return res.status(httpCode).json({
            type: body.type,
            messages: body.message,
            meta: body.meta,
        });
    }
}

export default ErrorResponse;