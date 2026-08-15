"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.uuid)().primaryKey().defaultRandom(),
    email: (0, pg_core_1.varchar)({ length: 255 }).notNull().unique(),
    password: (0, pg_core_1.varchar)({ length: 255 }).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").notNull().defaultNow(),
});
exports.todos = (0, pg_core_1.pgTable)("todos", {
    id: (0, pg_core_1.uuid)().primaryKey().defaultRandom(),
    title: (0, pg_core_1.varchar)({ length: 500 }).notNull(),
    content: (0, pg_core_1.text)(),
    done: (0, pg_core_1.boolean)().notNull().default(false),
    userId: (0, pg_core_1.uuid)("user_id")
        .notNull()
        .references(() => exports.users.id, { onDelete: "cascade" }),
    createdAt: (0, pg_core_1.timestamp)("created_at").notNull().defaultNow(),
});
//# sourceMappingURL=schema.js.map