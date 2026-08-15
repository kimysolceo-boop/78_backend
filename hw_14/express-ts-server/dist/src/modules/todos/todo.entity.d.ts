export interface Todo {
    id: string;
    title: string;
    content: string | null;
    userId: string;
    done: boolean;
    createdAt: Date;
}
export interface TodoRepository {
    findAll(): Promise<Todo[]>;
    create(todo: {
        title: string;
        content?: string;
        userId: string;
    }): Promise<Todo>;
    delete(id: string): Promise<Todo | null>;
    findById(id: string): Promise<Todo | null>;
    updateTitle(id: string, title: string): Promise<Todo | null>;
}
//# sourceMappingURL=todo.entity.d.ts.map