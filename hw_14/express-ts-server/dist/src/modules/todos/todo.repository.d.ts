import { Todo, TodoRepository } from "./todo.entity";
export declare class InMemoryRepository implements TodoRepository {
    private store;
    findAll(): Promise<Todo[]>;
    create(newTodo: {
        title: string;
        content?: string;
        userId: string;
    }): Promise<Todo>;
    updateTitle(id: string, title: string): Promise<Todo | null>;
    findById(id: string): Promise<Todo | null>;
    delete(id: string): Promise<Todo | null>;
}
//# sourceMappingURL=todo.repository.d.ts.map