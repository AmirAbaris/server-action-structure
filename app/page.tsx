import { getUsers, getPosts } from "@/lib/get-items";
import { Post } from "@/types/post-type";
import { User } from "@/types/user-type";
import PostForm from "@/components/post-form";

export default async function HomePage() {
  // this is a server component by default
  // server actions are best for mutations, not for fetching data
  const [users, posts] = await Promise.all([getUsers(), getPosts()]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {users.map((u: User) => (
        <p key={u.id}>{u.name}</p>
      ))}
      {posts.map((p: Post) => (
        <p key={p.id}>{p.title}</p>
      ))}
      <PostForm />
    </div>
  );
}
