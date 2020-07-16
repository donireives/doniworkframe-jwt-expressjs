import {Response} from "express";
import ISuccessResponse, {TypeOfSuccess} from "./response/SuccessResponseTypes";

class SuccessResponse {
    public static send<D = any, M = any>(res: Response<ISuccessResponse<D, M>>, body: {type: TypeOfSuccess, data: D, meta: M}) {
        let statusCode;

        switch (body.type) {
            case "CREATED":
                statusCode = 201;
                break;
            case "UPDATED":
                statusCode = 204;
                break;
            case "FETCHED":
                statusCode = 200;
                break;
            case "AUTHENTICATED":
                statusCode = 200;
                break;
        }

        return res.status(statusCode).json({
            type: body.type,
            data: body.data,
            meta: body.meta,
        });
    }
}

export default SuccessResponse;