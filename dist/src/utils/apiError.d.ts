export declare class ApiError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor(statusCode: any, message: any, isOperational?: boolean, stack?: string);
}
