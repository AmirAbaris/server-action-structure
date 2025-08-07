import "server-only";
import { Post } from "@/types/post-type";

export async function getPostById(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const post: Post = await res.json();
  return post;
}
