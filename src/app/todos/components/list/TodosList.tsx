'use client'

import { usePaginatedQuery } from "@blitzjs/rpc";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import getTodos from "../../queries/getTodos";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";
import { ITEMS_PER_PAGE } from "@/src/app/constants/constants";


export default function TodosList() {
  const searchParams = useSearchParams()!;
  const page = Number(searchParams.get("page")) || 0;
  const [{ todos, hasMore }] = usePaginatedQuery(getTodos, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <Link href={"/todos/new"}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add New Todo
          </button>
        </Link>
      </div>
      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <Pagination
        page={page}
        hasMore={hasMore}
      />
    </div>
  );
};
