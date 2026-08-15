import { Todo, TodoRepository } from "./todo.entity";
import { CreateTodoDto } from "./todo.request.dto";
export declare class TodoService {
    private readonly repo;
    constructor(repo: TodoRepository);
    getAll(): Promise<Todo[]>;
    create(todo: CreateTodoDto): Promise<Todo>;
    getTodo(id: string, userId: string): Promise<import("./todo.response.dto").TodoResponseDto>;
    deleteTodo(id: string, userId: string): Promise<import("./todo.response.dto").TodoResponseDto>;
    updateTodoTitle(id: string, title: string, userId: string): Promise<Todo | null>;
}
//# sourceMappingURL=todo.service.d.ts.map