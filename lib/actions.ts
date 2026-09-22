"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { likeProduct as likeProductInDb } from "@/lib/products";
import { createNotice } from "@/lib/notices";

export async function likeProductAction(id: string) {
  const newLikes = await likeProductInDb(id);

  // 변경된 좋아요 수를 화면에 즉시 반영하기 위해 캐시 갱신
  revalidatePath(`/products/${id}`);
  revalidatePath("/products");

  return newLikes;
}

export async function createNoticeAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();

  if (!title || !author || !content) {
    throw new Error("제목, 작성자, 내용을 모두 입력해주세요.");
  }

  const notice = await createNotice({ title, author, content });
  revalidatePath("/notices");
  redirect(`/notices/${notice.id}`);
}
