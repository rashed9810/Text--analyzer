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
const mongoose_1 = __importDefault(require("mongoose"));
const textService_1 = __importDefault(require("../services/textService"));
const text_1 = __importDefault(require("../models/text"));
// Establish a connection to the test database
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const mongoUri = 'mongodb://localhost:27017/text-analyzer-test';
    yield mongoose_1.default.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}));
// Close the database connection after all tests
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
}));
// Test suite for TextService
describe('TextService', () => {
    // Clear the texts collection before each test
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield text_1.default.deleteMany({});
    }));
    it('should create a text document', () => __awaiter(void 0, void 0, void 0, function* () {
        const content = 'Hello world!';
        const text = yield textService_1.default.createText(content);
        expect(text.content).toBe(content);
    }));
    it('should get a text document by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const content = 'Hello world!';
        const createdText = yield textService_1.default.createText(content);
        const fetchedText = yield textService_1.default.getTextById(createdText._id.toString()); // Convert ObjectId to string
        expect(fetchedText === null || fetchedText === void 0 ? void 0 : fetchedText.content).toBe(content); // Use optional chaining to handle possible null value
    }));
    it('should update a text document', () => __awaiter(void 0, void 0, void 0, function* () {
        const content = 'Hello world!';
        const updatedContent = 'Updated content';
        const createdText = yield textService_1.default.createText(content);
        const updatedText = yield textService_1.default.updateText(createdText._id.toString(), updatedContent);
        expect(updatedText === null || updatedText === void 0 ? void 0 : updatedText.content).toBe(updatedContent);
    }));
    it('should delete a text document', () => __awaiter(void 0, void 0, void 0, function* () {
        const content = 'Hello world!';
        const createdText = yield textService_1.default.createText(content);
        yield textService_1.default.deleteText(createdText._id.toString());
        const fetchedText = yield textService_1.default.getTextById(createdText._id.toString());
        expect(fetchedText).toBeNull();
    }));
    it('should count words in a text', () => {
        const content = 'Hello world!';
        const count = textService_1.default.wordCount(content);
        expect(count).toBe(2);
    });
    it('should count characters in a text', () => {
        const content = 'Hello world!';
        const count = textService_1.default.characterCount(content);
        expect(count).toBe(10); // Excluding spaces
    });
    it('should count sentences in a text', () => {
        const content = 'Hello world! How are you?';
        const count = textService_1.default.sentenceCount(content);
        expect(count).toBe(2);
    });
    it('should count paragraphs in a text', () => {
        const content = 'Hello world!\nHow are you?';
        const count = textService_1.default.paragraphCount(content);
        expect(count).toBe(2);
    });
    it('should find the longest word in a text', () => {
        const content = 'Hello world!';
        const longestWord = textService_1.default.longestWord(content);
        expect(longestWord).toBe('Hello');
    });
});
//# sourceMappingURL=textService.test.js.map