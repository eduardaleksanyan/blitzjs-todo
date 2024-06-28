import { NotFoundError } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db from "db";
import { GetTodo } from "@/src/app/todos/schemas"

export default resolver.pipe(
  resolver.zod(GetTodo),
  async ({ id }) => {
    const todo = await db.todo.findFirst({ where: { id } });

    if (!todo) throw new NotFoundError();

    return todo;
  }
);
