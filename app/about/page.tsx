import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>이 페이지는 app/about/page.tsx입니다. </h1>

      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
