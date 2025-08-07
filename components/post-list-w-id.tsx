import { Suspense } from "react";
import PostWithId from "./post-w-id";
import { PostSkeleton } from "./post-list";

export default function PostListWithId() {
  return (
    <div>
      {Array.from({ length: 10 }, (_, i) => (
        <Suspense key={i} fallback={<PostSkeleton />}>
          <PostWithId id={i + 1} />
        </Suspense>
      ))}
    </div>
  );
}
