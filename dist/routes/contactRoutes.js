"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const Contact_1 = __importDefault(require("../models/Contact"));
const router = express.Router();
// create a new contact
router.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newContact = yield Contact_1.default.create(request.body);
        response.status(201).json({ success: true, newContact });
    }
    catch (error) {
        response.status(500).json({ success: false, message: 'Error on create a new contact!' });
    }
}));
// get all contacts
router.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield Contact_1.default.find();
        response.status(200).json({ success: true, contacts });
    }
    catch (error) {
        response.status(500).json({ success: false, error: 'Unable to fetch contacts.' });
    }
}));
// delete a contact
router.delete('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const deletedContact = yield Contact_1.default.findByIdAndDelete(id);
        if (deletedContact) {
            response.status(200).json({ success: true, message: 'Contact deleted successfully' });
        }
        else {
            response.status(200).json({ success: false, message: 'Contact not found' });
        }
    }
    catch (error) {
        response.status(500).json({ success: false, message: 'Error on delete this contact' });
    }
}));
// update a contact
router.patch('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateContact = yield Contact_1.default.findByIdAndUpdate(request.params.id, request.body, { new: true });
        response.status(200).json(updateContact);
    }
    catch (error) {
        response.status(500).json({ error: 'Unable to update contact.' });
    }
}));
exports.default = router;
