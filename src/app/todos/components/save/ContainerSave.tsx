import React, { Suspense } from "react"
import LoadingCustom from "@/src/app/components/ui/LoadingCustom"
import Link from "next/link"

interface Props {
  children: React.ReactNode
  title: string
}
export default function ContainerSave({ children, title = "" }: Props) {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <Suspense fallback={<LoadingCustom />}>{children}</Suspense>
        <Link href={'/todos'} className="py-2 text-blue-500 underline hover:no-underline">Todo List</Link>
      </div>
    </div>
  )
}
