"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const textController_1 = __importDefault(require("../controllers/textController"));
const router = (0, express_1.Router)();
router.post('/text', textController_1.default.createText);
router.get('/text/:id', textController_1.default.getText);
router.put('/text/:id', textController_1.default.updateText);
router.delete('/text/:id', textController_1.default.deleteText);
router.get('/text/:id/wordCount', textController_1.default.wordCount);
router.get('/text/:id/characterCount', textController_1.default.characterCount);
router.get('/text/:id/sentenceCount', textController_1.default.sentenceCount);
router.get('/text/:id/paragraphCount', textController_1.default.paragraphCount);
router.get('/text/:id/longestWord', textController_1.default.longestWord);
exports.default = router;
//# sourceMappingURL=textRoutes.js.map