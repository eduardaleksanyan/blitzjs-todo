import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateTodoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateTodoSchema),
  async ({ id, ...data }) => {
    return db.todo.update({ where: { id }, data });
  }
);
