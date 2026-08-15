"use strict";
// Репозиторий отвечает за работу с БД(базой данных)
// Временно мы работаем с in memory DB, то есть это не реальный
// сервер базы данных, а внутренне хранилище, которое будет сохранять
// результат работы до тех пор, пока не будет перезагружен сервер
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRepository = void 0;
const uuid_1 = require("uuid");
class InMemoryRepository {
    constructor() {
        this.store = new Map();
    }
    async findAll() {
        // Мы из коллекции Map достаём только значения
        // (объекты) и с помощью Array.from возвращаем
        // массив всех этих объектов
        return Array.from(this.store.values());
    }
    async create(newTodo) {
        const todo = {
            id: (0, uuid_1.v7)(),
            title: newTodo.title,
            content: newTodo.content ?? null,
            userId: newTodo.userId,
            done: false,
            createdAt: new Date(),
        };
        this.store.set(todo.id, todo);
        return todo;
    }
    async updateTitle(id, title) {
        const todo = this.store.get(id);
        if (!todo) {
            return null;
        }
        todo.title = title;
        return todo;
    }
    async findById(id) {
        return this.store.get(id) ?? null;
    }
    async delete(id) {
        const todo = this.store.get(id);
        if (!todo) {
            return null;
        }
        this.store.delete(id);
        return todo;
    }
}
exports.InMemoryRepository = InMemoryRepository;
//# sourceMappingURL=todo.repository.js.map