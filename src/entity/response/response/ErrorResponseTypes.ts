export type TypeOfError = "SERVER_ERROR" | "BODY_ERROR" | "FAILED_AUTHENTICATION" | "ENTITY_NOT_FOUND";

export interface IErrorResponse<MES = any, M = any> {
    type: TypeOfError,
    messages?: MES,
    meta?: M,
}