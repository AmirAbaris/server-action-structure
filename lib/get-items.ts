import { Post } from "@/types/post-type";
import { User } from "@/types/user-type";

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return users;
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  return posts;
}
