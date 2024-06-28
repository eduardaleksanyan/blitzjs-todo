"use client"
import updateTodo from "../../mutations/updateTodo"
import getTodo from "../../queries/getTodo"
import { UpdateTodoSchema } from "../../schemas"
import { FORM_ERROR, TodoForm } from "./TodoForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"
import ContainerSave from "@/src/app/todos/components/save/ContainerSave"

export const EditTodo = ({ todoId }: { todoId: number }) => {
  const [todo, { setQueryData }] = useQuery(
    getTodo,
    { id: todoId },
    {
      staleTime: Infinity,
    }
  )
  const [updateTodoMutation] = useMutation(updateTodo)
  const router = useRouter()

  const onSubmit = async (values: any) => {
    try {
      const updated = await updateTodoMutation({
        ...values,
        id: todo.id,
      })
      await setQueryData(updated)
      router.refresh()
    } catch (error: any) {
      console.error(error)
      return {
        [FORM_ERROR]: error.toString(),
      }
    }
  }
  return (
    <ContainerSave title={"Edit Todo"}>
      <TodoForm
        submitText="Update Todo"
        schema={UpdateTodoSchema}
        initialValues={todo}
        onSubmit={onSubmit}
      />
    </ContainerSave>
  )
}
