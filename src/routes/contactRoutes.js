"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Contact_1 = require("../models/Contact");
var router = express.Router();
// create a new contact
router.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var newContact, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Contact_1.default.create(request.body)];
            case 1:
                newContact = _a.sent();
                response.status(201).json({ success: true, newContact: newContact });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                response.status(500).json({ success: false, message: 'Error on create a new contact!' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// get all contacts
router.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var contacts, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Contact_1.default.find()];
            case 1:
                contacts = _a.sent();
                response.status(200).json({ success: true, contacts: contacts });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                response.status(500).json({ success: false, error: 'Unable to fetch contacts.' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// delete a contact
router.delete('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedContact, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = request.params.id;
                return [4 /*yield*/, Contact_1.default.findByIdAndDelete(id)];
            case 1:
                deletedContact = _a.sent();
                if (deletedContact) {
                    response.status(200).json({ success: true, message: 'Contact deleted successfully' });
                }
                else {
                    response.status(200).json({ success: false, message: 'Contact not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                response.status(500).json({ success: false, message: 'Error on delete this contact' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// update a contact
router.patch('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var updateContact, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Contact_1.default.findByIdAndUpdate(request.params.id, request.body, { new: true })];
            case 1:
                updateContact = _a.sent();
                response.status(200).json(updateContact);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                response.status(500).json({ error: 'Unable to update contact.' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
