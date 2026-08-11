import { z } from "zod";
export const createTodoDto = z.object({
  title: z.string().trim().min(1, "Title is required"),
});
export const updateTodoDto = z.object({
  title: z.string().trim().min(1, "Title is required").optional(),
  done: z.boolean().optional(),
});
export type CreateTodoDto = z.infer<typeof createTodoDto>;
export type UpdateTodoDto = z.infer<typeof updateTodoDto>;