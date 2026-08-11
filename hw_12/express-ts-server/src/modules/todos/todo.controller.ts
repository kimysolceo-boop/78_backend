import { TodoService } from "./todo.service";
import { Request, Response } from "express";
import toTodoResponse from "./todo.mapper";
import { createTodoDto } from "./todo.request.dto";

// Adapter layer - http requests, req, res, express, error
export class TodoController {
  constructor(private readonly service: TodoService) {
    this.service = service;
  }

  getAll = async (_req: Request, res: Response) => {
  const todos = await this.service.getAll();

  const response = todos.map(toTodoResponse);

  res.status(200).json(response);
};

  create = async (req: Request, res: Response) => {
  try {
    const data = createTodoDto.parse(req.body);

    const todo = await this.service.create(data.title);

    const response = toTodoResponse(todo);

    res.status(201).json(response);
      } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      }
    }
  };
}

