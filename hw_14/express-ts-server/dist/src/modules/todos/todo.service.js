"use strict";
// Содержит бизнес логику
// Не работает с req res и express
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_mapper_1 = __importDefault(require("./todo.mapper"));
class TodoService {
    constructor(repo) {
        this.repo = repo;
        this.repo = repo;
    }
    async getAll() {
        return this.repo.findAll();
    }
    async create(todo) {
        return this.repo.create(todo);
    }
    async getTodo(id, userId) {
        const todo = await this.repo.findById(id);
        // todo exists
        if (!todo) {
            throw new Error("Todo not found");
        }
        // check owner
        if (todo.userId !== userId) {
            throw new Error("Forbidden");
        }
        return (0, todo_mapper_1.default)(todo);
    }
    async deleteTodo(id, userId) {
        const todo = await this.repo.findById(id);
        // todo exists
        if (!todo) {
            throw new Error("Todo not found");
        }
        // check owner
        if (todo.userId !== userId) {
            throw new Error("Forbidden");
        }
        await this.repo.delete(id);
        return (0, todo_mapper_1.default)(todo);
    }
    async updateTodoTitle(id, title, userId) {
        const todo = await this.repo.findById(id);
        // todo exists
        if (!todo) {
            throw new Error("Todo not found");
        }
        // check owner
        if (todo.userId !== userId) {
            throw new Error("Forbidden");
        }
        return this.repo.updateTitle(id, title);
    }
}
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map