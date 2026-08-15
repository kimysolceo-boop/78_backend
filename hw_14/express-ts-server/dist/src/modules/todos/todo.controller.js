"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_request_dto_1 = require("./todo.request.dto");
// Adapter layer - http requests, req, res, express, error
class TodoController {
    constructor(service) {
        this.service = service;
        this.getAll = async (_req, res) => {
            const todos = await this.service.getAll();
            res.status(200).json(todos);
        };
        this.create = async (req, res, next) => {
            try {
                const userId = req.currentUser?.id;
                const data = todo_request_dto_1.createTodoDto.parse({ ...req.body, userId });
                const result = await this.service.create(data);
                res.status(201).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.getOne = async (req, res, next) => {
            try {
                const id = req.params.id;
                if (typeof id !== "string" || !id) {
                    return res.status(400).json({ error: "Bad request" });
                }
                const userId = req.currentUser?.id;
                if (!userId) {
                    return res.status(401).json({ error: "Unautorized" });
                }
                const todo = await this.service.getTodo(id, userId);
                res.status(200).json(todo);
            }
            catch (error) {
                next(error);
            }
        };
        this.delete = async (req, res, next) => {
            try {
                const id = req.params.id;
                if (typeof id !== "string" || !id) {
                    return res.status(400).json({ error: "Bad request" });
                }
                const userId = req.currentUser?.id;
                if (!userId) {
                    return res.status(401).json({ error: "Unautorized" });
                }
                const todo = await this.service.deleteTodo(id, userId);
                res.status(200).json(todo);
            }
            catch (error) {
                next(error);
            }
        };
        this.updateTitle = async (req, res, next) => {
            try {
                const id = req.params.id;
                const userId = req.currentUser?.id;
                if (!userId) {
                    return res.status(401).json({ error: "Unauthorized" });
                }
                if (typeof id !== "string" || !id) {
                    return res.status(400).json({ error: "Bad request" });
                }
                const { title } = todo_request_dto_1.updateTodoTitleDto.parse(req.body);
                const todo = await this.service.updateTodoTitle(id, title, userId);
                res.status(200).json(todo);
            }
            catch (error) {
                next(error);
            }
        };
        this.service = service;
    }
}
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map