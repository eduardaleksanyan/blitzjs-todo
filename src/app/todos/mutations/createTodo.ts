import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateTodoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateTodoSchema),
  async (input) => {
    return db.todo.create({ data: input });
  }
);
