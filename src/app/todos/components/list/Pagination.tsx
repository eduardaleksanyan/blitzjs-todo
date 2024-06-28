'use client'

import { Route } from "next"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface Props {
  page: number;
  hasMore: boolean;
}

export default function Pagination({ page, hasMore }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const goToPreviousPage = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", (page - 1).toString());
    router.push((pathname + "?" + params.toString()) as Route);
  };

  const goToNextPage = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", (page + 1).toString());
    router.push((pathname + "?" + params.toString()) as Route);
  };
  return (
    <div className="flex justify-between mt-4">
      <button
        disabled={page === 0}
        onClick={goToPreviousPage}
        className={`${
          page === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
        } text-white px-4 py-2 rounded hover:bg-blue-700`}
      >
        &lt;&lt; Previous
      </button>
      <button
        disabled={!hasMore}
        onClick={goToNextPage}
        className={`${
          !hasMore ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
        } text-white px-4 py-2 rounded hover:bg-blue-700`}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
};
