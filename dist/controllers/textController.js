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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const textService_1 = __importDefault(require("../services/textService"));
class TextController {
    static createText(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { content } = req.body;
            const text = yield textService_1.default.createText(content);
            res.status(201).json(text);
        });
    }
    static getText(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const text = yield textService_1.default.getTextById(id);
            if (text) {
                res.json(text);
            }
            else {
                res.status(404).json({ message: 'Text not found' });
            }
        });
    }
    static updateText(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { content } = req.body;
            const text = yield textService_1.default.updateText(id, content);
            if (text) {
                res.json(text);
            }
            else {
                res.status(404).json({ message: 'Text not found' });
            }
        });
    }
    static deleteText(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const text = yield textService_1.default.deleteText(id);
            if (text) {
                res.json({ message: 'Text deleted' });
            }
            else {
                res.status(404).json({ message: 'Text not found' });
            }
        });
    }
    static wordCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const text = yield textService_1.default.getTextById(id);
            if (text) {
                const count = textService_1.default.wordCount(text.content);
                res.json({ wordCount: count });
            }
            else {
                res.status(404).json({ message: 'Text not found' });
            }
        });
    }
    static characterCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const text = yield textService_1.default.getTextById(id);
            if (text) {
                const count = textService_1.default.characterCount(text.content);
                res.json({ characterCount: count });
            }
            else {
                res.status(404).json({ message: 'Text not found' });
            }
        });
    }
    static sentenceCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const text = yield textService_1.default.getTextById(id);
            if (text) {
                const count = textService_1.default.sentenceCount(text.content);
                res.json({ sentenceCount: count });
            }
            else {
                res.status(404).json({ message: 'Text not found' });
            }
        });
    }
    static paragraphCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const text = yield textService_1.default.getTextById(id);
            if (text) {
                const count = textService_1.default.paragraphCount(text.content);
                res.json({ paragraphCount: count });
            }
            else {
                res.status(404).json({ message: 'Text not found' });
            }
        });
    }
    static longestWord(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const text = yield textService_1.default.getTextById(id);
            if (text) {
                const word = textService_1.default.longestWord(text.content);
                res.json({ longestWord: word });
            }
            else {
                res.status(404).json({ message: 'Text not found' });
            }
        });
    }
}
exports.default = TextController;
//# sourceMappingURL=textController.js.map