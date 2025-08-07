import { getPostById } from "@/app/data/post/get-post-w-id";

export default async function PostWithId({ id }: { id: number }) {
  const post = await getPostById(id);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
