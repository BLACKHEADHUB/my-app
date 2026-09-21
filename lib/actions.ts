"use server";

import { revalidatePath } from "next/cache";
import { likeProduct as likeProductInDb } from "@/lib/products";

// 좋아요 버튼 클릭 시 실행되는 Server Action
export async function likeProductAction(id: string) {
  const newLikes = await likeProductInDb(id);

  // 변경된 좋아요 수를 화면에 즉시 반영하기 위해 캐시 갱신
  revalidatePath(`/products/${id}`);
  revalidatePath("/products");

  return newLikes;
}
