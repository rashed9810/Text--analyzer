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
const text_1 = __importDefault(require("../models/text"));
class TextService {
    static createText(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = new text_1.default({ content });
            yield text.save();
            return text;
        });
    }
    static getTextById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return text_1.default.findById(id);
        });
    }
    static updateText(id, content) {
        return __awaiter(this, void 0, void 0, function* () {
            return text_1.default.findByIdAndUpdate(id, { content }, { new: true });
        });
    }
    static deleteText(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return text_1.default.findByIdAndDelete(id);
        });
    }
    static wordCount(content) {
        return content.split(/\s+/).filter(word => word).length;
    }
    static characterCount(content) {
        return content.replace(/\s+/g, '').length;
    }
    static sentenceCount(content) {
        return content.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    }
    static paragraphCount(content) {
        return content.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
    }
    static longestWord(content) {
        const words = content.split(/\s+/).filter(word => word);
        return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    }
}
exports.default = TextService;
//# sourceMappingURL=textService.js.map