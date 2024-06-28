"use client";
import { FORM_ERROR, TodoForm } from "./TodoForm";
import { CreateTodoSchema } from "../../schemas";
import { useMutation } from "@blitzjs/rpc";
import createTodo from "../../mutations/createTodo";
import { useRouter } from "next/navigation";

export function NewTodo() {
  const [createTodoMutation] = useMutation(createTodo);
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      const todo = await createTodoMutation(values);
      router.push(`/todos/${todo.id}/edit`);
    } catch (error: any) {
      console.error(error);
      return {
        [FORM_ERROR]: error.toString(),
      };
    }
  };

  return (
    <TodoForm
      submitText="Create Todo"
      schema={CreateTodoSchema}
      onSubmit={onSubmit}
    />
  );
}
