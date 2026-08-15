import { z } from "zod";
export declare const createTodoDto: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    userId: z.ZodUUID;
}, z.core.$strip>;
export type CreateTodoDto = z.infer<typeof createTodoDto>;
export declare const updateTodoTitleDto: z.ZodObject<{
    title: z.ZodString;
}, z.core.$strip>;
export type UpdateTodoTitleDto = z.infer<typeof updateTodoTitleDto>;
//# sourceMappingURL=todo.request.dto.d.ts.map