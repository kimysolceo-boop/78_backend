"use strict";
// writing - соединим все независимые слои
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTodoRouter = buildTodoRouter;
// import { InMemoryRepository } from "./todo.repository";
const todo_service_1 = require("./todo.service");
const todo_controller_1 = require("./todo.controller");
const todo_router_1 = require("./todo.router");
const todo_pg_repository_1 = require("./todo.pg.repository");
const user_repository_1 = require("../users/user.repository");
function buildTodoRouter() {
    const repo = new todo_pg_repository_1.TodoPgRepository();
    const service = new todo_service_1.TodoService(repo);
    const controller = new todo_controller_1.TodoController(service);
    const userRepo = new user_repository_1.DrizzleUserRepository();
    return (0, todo_router_1.createTodoRouter)(controller, userRepo);
}
//# sourceMappingURL=todo.containers.js.map