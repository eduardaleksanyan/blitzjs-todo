"use client"

import Link from "next/link"
import { PencilSquareIcon, CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid"
import { Todo } from "@/src/app/types/Todo"
import { useMutation } from "@blitzjs/rpc"
import deleteTodo from "@/src/app/todos/mutations/deleteTodo"
import { useRouter } from "next/navigation"
import React from "react"

const TodoItem = ({ name, isCompleted, id }: Todo) => {
  const router = useRouter()
  const [deleteTodoMutation] = useMutation(deleteTodo)

  return (
    <div className="p-4 border rounded shadow flex justify-between items-center">
      <div className="flex items-center">
        {name}
        {isCompleted && <CheckCircleIcon className="h-6 w-6 text-green-500 ml-2" />}
      </div>
      <div className="flex items-center">
        <Link href={`/todos/${id}/edit`} className="ml-4 text-gray-500 hover:text-gray-700">
          <PencilSquareIcon className="h-6 w-6" />
        </Link>
        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted"))  {
              await deleteTodoMutation({ id })
              router.push("/todos")
            }
          }}
          className="ml-4 text-gray-500 hover:text-gray-700"
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default React.memo(TodoItem);
