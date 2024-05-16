"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const textSchema = new mongoose_1.Schema({
    content: { type: String, required: true }
});
const Text = (0, mongoose_1.model)('Text', textSchema);
exports.default = Text;
//# sourceMappingURL=text.js.map