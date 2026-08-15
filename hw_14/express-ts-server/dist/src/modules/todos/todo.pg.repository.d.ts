import { Todo, TodoRepository } from "./todo.entity";
export declare class TodoPgRepository implements TodoRepository {
    create(newTodo: {
        title: string;
        content?: string;
        userId: string;
    }): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findById(id: string): Promise<Todo | null>;
    delete(id: string): Promise<Todo | null>;
    updateTitle(id: string, title: string): Promise<Todo | null>;
}
//# sourceMappingURL=todo.pg.repository.d.ts.map