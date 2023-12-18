import { Response } from "express";

export interface MongoDBError extends Error {
    code?: number;
    keyPattern?: Record<string, number | string>;
    keyValue?: Record<string, number | string>;
}

export function handleMongoError(error: MongoDBError, response: Response): void {
    if (error.code === 11000) {
        if(error.keyPattern && 'phoneNumber' in error.keyPattern){
            response.status(400).json({ success: false, message: `A contact with this phone number already exists.` });
        }
    } else {
        response.status(500).json({ success: false, message: error.message });
    }
}

export function isMongoDBError(error: any): error is MongoDBError {
    return error && typeof error.code === 'number';
}