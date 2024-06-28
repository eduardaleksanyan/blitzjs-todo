import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteTodoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteTodoSchema),
  async ({ id }) => {
    return db.todo.deleteMany({ where: { id } });
  }
);
