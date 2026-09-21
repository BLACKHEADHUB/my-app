"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { likeProductAction } from "@/lib/actions";

export function LikeButton({
  id,
  initialLikes,
}: {
  id: string;
  initialLikes: number;
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    likeProductAction(id).then((newLikes) => {
      startTransition(() => {
        setLikes(newLikes);
      });
    });
  };

  return (
    <Button variant="outline" disabled={isPending} onClick={handleLike}>
      {isPending ? "저장 중..." : `♥ 좋아요 ${likes}`}
    </Button>
  );
}
