import { getPosts } from "@/app/data/post/get-posts";

export function PostSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-10 w-1/2 bg-slate-200 rounded-lg"></div>
      <div className="h-5 w-1/2 bg-slate-200 rounded-lg"></div>
    </div>
  );
}

export default async function PostList() {
  const posts = await getPosts();
  
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="space-y-2">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
