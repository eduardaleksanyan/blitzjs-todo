import Link from "next/link"
export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Home</h1>
        <div>
          <Link
            href={"/todos"}
            className="px-4 py-2 bg-blue-100 text-blue-500 underline hover:no-underline rounded"
          >
            Go to Todo List
          </Link>
        </div>
      </div>
    </>
  )
}
