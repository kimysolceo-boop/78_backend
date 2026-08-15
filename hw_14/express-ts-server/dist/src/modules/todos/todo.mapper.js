"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = toTodoDtoResponse;
function toTodoDtoResponse(todo) {
    return {
        id: todo.id,
        title: todo.title,
        content: todo.content ?? "",
        done: todo.done,
        createdAt: todo.createdAt.toISOString(),
    };
}
//# sourceMappingURL=todo.mapper.js.map