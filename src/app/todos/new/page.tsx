import { Metadata } from "next"
import { NewTodo } from "../components/save/NewTodo"
import ContainerSave from "@/src/app/todos/components/save/ContainerSave"

export const metadata: Metadata = {
  title: "New Todo",
  description: "New Todo",
}

export default function Page() {
  return (
    <ContainerSave title={"New Todo"}>
      <NewTodo />
    </ContainerSave>
  )
}
