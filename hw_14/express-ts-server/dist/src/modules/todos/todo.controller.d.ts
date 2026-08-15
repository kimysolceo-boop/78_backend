import { TodoService } from "./todo.service";
import { NextFunction, Request, Response } from "express";
export declare class TodoController {
    private readonly service;
    constructor(service: TodoService);
    getAll: (_req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getOne: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    updateTitle: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=todo.controller.d.ts.map