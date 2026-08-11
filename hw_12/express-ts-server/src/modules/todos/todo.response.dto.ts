export type TodoResponseDto = {
  id: string;
  title: string;
    done: boolean;
  createdAt: string;
}

export type CreateTodoResponseDto = {
  todo: TodoResponseDto;
}