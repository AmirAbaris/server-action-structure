import "server-only";
import { Post } from "@/types/post-type";

export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const posts: Post[] = await res.json();
  return posts;
}
