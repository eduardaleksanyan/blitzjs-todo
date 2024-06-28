import { Metadata } from "next";
import { Suspense } from "react";
import { EditTodo } from "../../components/save/EditTodo";
import LoadingCustom from "@/src/app/components/ui/LoadingCustom"

type EditTodoPageProps = {
  params: { todoId: string };
};

export const metadata: Metadata = {
  title: "Todo",
  description: "Todos",
};

export default async function Page({ params }: EditTodoPageProps) {
  return (
    <div>
      <Suspense fallback={<LoadingCustom />}>
        <EditTodo todoId={Number(params.todoId)} />
      </Suspense>
    </div>
  );
}
