"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoTitleDto = exports.createTodoDto = void 0;
const zod_1 = require("zod");
exports.createTodoDto = zod_1.z.object({
    title: zod_1.z
        .string("Should be string").min(2, "Required is at least 2 symbols"),
    content: zod_1.z.string("Should be string").max(300, "Max 300 symbols").optional(),
    userId: zod_1.z.uuid("Invalid id"),
});
exports.updateTodoTitleDto = zod_1.z.object({
    title: zod_1.z
        .string("Should be string")
        .min(2, "Required is at least 2 symbols"),
});
//# sourceMappingURL=todo.request.dto.js.map