import {Response} from "express";
export type TypeOfError = "SERVER_ERROR" | "BODY_ERROR" | "FAILED_AUTHENTICATION" | "ENTITY_NOT_FOUND";
export interface IErrorResponse<_messages = any, _status = boolean> {
    type: TypeOfError,
    messages?: _messages,
    status?: _status,
}

class ErrorResponse {
    public static send<_messages = any, _status = boolean>(res: Response<IErrorResponse<_messages, _status>>, body: { type: TypeOfError, message: _messages, status: _status }) {
        let httpCode;

        switch (body.type) {
            case "SERVER_ERROR" : httpCode = 500; break;
            case "BODY_ERROR" : httpCode = 422; break;
            case "FAILED_AUTHENTICATION" : httpCode = 401; break;
            case "ENTITY_NOT_FOUND" : httpCode = 404; break;
        }

        return res.status(httpCode).json({
            status: body.status,
            type: body.type,
            messages: body.message,
        });
    }
}

export default ErrorResponse;