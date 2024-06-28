import { Metadata } from "next";
import { Suspense } from "react";
import TodosList from "./components/list/TodosList";
import LoadingCustom from "@/src/app/components/ui/LoadingCustom"

export const metadata: Metadata = {
  title: "Todos",
  description: "List of todos",
};

export default function Page() {
  return (
    <div>
      <Suspense fallback={<LoadingCustom />}>
        <TodosList />
      </Suspense>
    </div>
  );
}
