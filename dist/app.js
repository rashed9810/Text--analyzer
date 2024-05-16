"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const textRoutes_1 = __importDefault(require("./routes/textRoutes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const mongoUri = 'mongodb://localhost:27017/text-analyzer';
mongoose_1.default.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use('/api', textRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map