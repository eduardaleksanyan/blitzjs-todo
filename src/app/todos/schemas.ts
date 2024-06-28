import { z } from "zod";

export const CreateTodoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  isCompleted: z.boolean(),
});
export const UpdateTodoSchema = CreateTodoSchema.merge(
  z.object({
    id: z.number(),
  })
);

export const DeleteTodoSchema = z.object({
  id: z.number(),
});

export const GetTodo = z.object({
  id: z.number().optional().refine(Boolean, "Required"),
});
