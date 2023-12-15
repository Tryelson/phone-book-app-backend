"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var contactSchema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    phoneNumber: { type: String, required: true, unique: true }
}, {
    versionKey: false,
    toJSON: {
        transform: function (_, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});
var Contact = mongoose_1.default.model('Contact', contactSchema);
exports.default = Contact;
