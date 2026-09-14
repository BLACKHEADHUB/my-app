import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>이 페이지는 app/about/page.tsx입니다. </h1>

      <Link href="home"> /home 페이지로 이동하기</Link>
    </div>
  );
}
