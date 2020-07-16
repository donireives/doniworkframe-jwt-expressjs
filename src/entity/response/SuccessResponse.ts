import {Response} from "express";

export type TypeOfSuccess = "CREATED" | "UPDATED" | "FETCHED" | "AUTHENTICATED" | "DELETED";

interface ISuccessResponse<_data = any, _status = boolean> {
    status: _status,
    type: TypeOfSuccess,
    data: _data,
}

class SuccessResponse {
    public static send<_data = any, _status = boolean>(res: Response<ISuccessResponse<_data, _status>>, body: {type: TypeOfSuccess, data: _data, status: _status}) {
        let statusCode;

        switch (body.type) {
            case "CREATED" : statusCode = 201; break;
            case "UPDATED" : statusCode = 204; break;
            case "FETCHED" : statusCode = 200; break;
            case "DELETED" : statusCode = 204; break;
            case "AUTHENTICATED" : statusCode = 200; break;
        }

        return res.status(statusCode).json({
            status: body.status,
            type: body.type,
            data: body.data,
        });
    }
}

export default SuccessResponse;