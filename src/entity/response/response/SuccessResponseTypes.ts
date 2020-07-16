export type TypeOfSuccess = "CREATED" | "UPDATED" | "FETCHED" | "AUTHENTICATED";

interface ISuccessResponse<D = any, M = any> {
    type: TypeOfSuccess,
    data: D,
    meta: M,
}

export default ISuccessResponse;