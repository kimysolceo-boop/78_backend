"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoPgRepository = void 0;
const db_1 = require("../../db");
const schema_1 = require("../../db/schema");
const drizzle_orm_1 = require("drizzle-orm");
class TodoPgRepository {
    async create(newTodo) {
        const [todo] = await db_1.db.insert(schema_1.todos).values(newTodo).returning();
        return todo;
    }
    async findAll() {
        return db_1.db.select().from(schema_1.todos);
    }
    async findById(id) {
        const [todo] = await db_1.db
            .select()
            .from(schema_1.todos)
            .where((0, drizzle_orm_1.eq)(schema_1.todos.id, id))
            .limit(1);
        return todo ?? null;
    }
    async delete(id) {
        const [todo] = await db_1.db.delete(schema_1.todos).where((0, drizzle_orm_1.eq)(schema_1.todos.id, id)).returning();
        return todo ?? null;
    }
    async updateTitle(id, title) {
        const [todo] = await db_1.db
            .update(schema_1.todos)
            .set({ title })
            .where((0, drizzle_orm_1.eq)(schema_1.todos.id, id))
            .returning();
        return todo ?? null;
    }
}
exports.TodoPgRepository = TodoPgRepository;
//# sourceMappingURL=todo.pg.repository.js.map