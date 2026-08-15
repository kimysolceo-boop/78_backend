// Репозиторий отвечает за работу с БД(базой данных)
// Временно мы работаем с in memory DB, то есть это не реальный
// сервер базы данных, а внутренне хранилище, которое будет сохранять
// результат работы до тех пор, пока не будет перезагружен сервер

import { v7 } from "uuid";
import { Todo, TodoRepository } from "./todo.entity";

export class InMemoryRepository implements TodoRepository {
  private store: Map<string, Todo> = new Map();

  async findAll(): Promise<Todo[]> {
    // Мы из коллекции Map достаём только значения
    // (объекты) и с помощью Array.from возвращаем
    // массив всех этих объектов
    return Array.from(this.store.values());
  }

  async create(newTodo: {
  title: string;
  content?: string;
  userId: string;
}): Promise<Todo> {
  const todo: Todo = {
    id: v7(),
    title: newTodo.title,
    content: newTodo.content ?? null,
    userId: newTodo.userId,
    done: false,
    createdAt: new Date(),
  };

  this.store.set(todo.id, todo);

  return todo;
}

async updateTitle(id: string, title: string): Promise<Todo | null> {
  const todo = this.store.get(id);

  if (!todo) {
    return null;
  }

  todo.title = title;

  return todo;
}

async findById(id: string): Promise<Todo | null> {
  return this.store.get(id) ?? null;
}

async delete(id: string): Promise<Todo | null> {
  const todo = this.store.get(id);

  if (!todo) {
    return null;
  }

  this.store.delete(id);

  return todo;
}
}
