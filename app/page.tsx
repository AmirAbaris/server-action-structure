import { Suspense } from "react";
import { getPosts } from "./data/post/get-posts";
import { getUsers } from "./data/user/get-users";
import { ErrorBoundary } from "./error-boundary";

async function Users() {
  const users = await getUsers();
  return (
    <>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </>
  );
}

async function Posts() {
  const posts = await getPosts();
  return (
    <>
      {posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading users...</p>}>
          <Users />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading posts...</p>}>
          <Posts />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
