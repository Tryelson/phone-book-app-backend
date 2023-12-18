"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMongoDBError = exports.handleMongoError = void 0;
function handleMongoError(error, response) {
    if (error.code === 11000) {
        if (error.keyPattern && 'phoneNumber' in error.keyPattern) {
            response.status(400).json({ success: false, message: `A contact with this phone number already exists.` });
        }
    }
    else {
        response.status(500).json({ success: false, message: error.message });
    }
}
exports.handleMongoError = handleMongoError;
function isMongoDBError(error) {
    return error && typeof error.code === 'number';
}
exports.isMongoDBError = isMongoDBError;
