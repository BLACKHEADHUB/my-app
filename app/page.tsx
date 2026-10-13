import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-2xl flex-col items-center justify-center gap-8 py-24 px-8 text-center">
        <span className="rounded-full bg-black/[.06] px-3 py-1 text-xs font-medium tracking-wide text-zinc-600 dark:bg-white/[.08] dark:text-zinc-300">
          Server Component
        </span>

        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          웹서버보안프로그래밍 — 7주차
        </h1>
        <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Auth.js로 로그인/회원가입 기능을 붙였습니다. 오른쪽 위
          &ldquo;로그인&rdquo; 버튼에서 직접 가입하고 로그인해보세요.
        </p>

        {/* Counter는 useState를 쓰는 Client Component 입니다. */}
        <Counter />
      </main>
    </div>
  );
}