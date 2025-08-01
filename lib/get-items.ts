import { Post } from "@/types/post-type";
import { User } from "@/types/user-type";

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const users: User[] = await res.json();
  return users;
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const posts: Post[] = await res.json();
  return posts;
}

// cheat sheet:
// fetch(url, {
//   // Cache control (standard fetch + Next.js)
//   cache: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached',

//   // Next.js specific options
//   next?: {
//     revalidate?: number;        // seconds to ISR (incremental static regeneration)
//     tags?: string[];            // cache tags for selective invalidation (experimental)
//     fallback?: 'blocking';      // fallback mode for dynamic routes (Next.js 13.4+)
//   },

//   // Other standard fetch options...
// });


// | Option            | Values / Usage        | Description                                                                  |
// | ----------------- | --------------------- | ---------------------------------------------------------------------------- |
// | `cache`           | `'default'` (default) | Browser’s default caching behavior                                           |
// |                   | `'no-store'`          | Disable caching; always fetch fresh data                                     |
// |                   | `'reload'`            | Similar to `no-store`, but revalidates the resource                          |
// |                   | `'force-cache'`       | Use the cache if available; else fetch from network                          |
// |                   | `'only-if-cached'`    | Only use cache, never hit network (rarely used in Next.js)                   |
// | `next.revalidate` | `number` (seconds)    | Enable ISR — cache the response and revalidate in background after N seconds |
// | `next.tags`       | `string[]`            | (Experimental) Use cache tags for selective invalidation                     |
// | `next.fallback`   | `'blocking'`          | Control fallback mode for dynamic routes (new in 13.4+)                      |
