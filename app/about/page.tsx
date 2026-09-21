import Link from "next/link";
import { Counter } from "@/components/Counter"; // 기존 카운터 컴포넌트

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6 text-center">
      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
        Server Component
      </span>

      <h1 className="text-4xl font-bold">웹서버보안프로그래밍 — 최용진</h1>

      <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
        create-next-app으로 만든 Next.js 16 App Router 템플릿입니다. 이 페이지는
        서버에서 렌더링되고, 아래 카운터는 브라우저에서 동작하는 별도의 Client
        Component입니다.
      </p>
      {/* 기존 카운터 */}
      <Counter />

      {/* 🔽 이동 링크 영역 🔽 */}
      <div className="flex flex-col gap-2 mt-4">
        <Link
          href="/about"
          className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50 hover:opacity-80"
        >
          /about 페이지로 이동 (파일 기반 라우팅 확인) →
        </Link>

        {/* 👇 새로 추가한 /products 이동 링크 👇 */}
        <Link
          href="/products"
          className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50 hover:opacity-80"
        >
          /products 페이지로 이동 (상품 목록) →
        </Link>
      </div>
    </main>
  );
}
