import PostList from "@/components/post-list";
import { Suspense } from "react";
import { PostSkeleton } from "@/components/post-list";

export default function PostPage() {
  return (
    <Suspense
      fallback={Array.from({ length: 10 }, (_, i) => (
        <PostSkeleton key={i} />
      ))}
    >
      <PostList />
    </Suspense>
  );
}
