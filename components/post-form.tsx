"use client";

import { createPost } from "@/app/actions/create-post";

export default function PostForm() {
  return (
    <form action={createPost}>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Body" name="body" />
        <button type="submit">Create Post</button>
      </div>
    </form>
  );
}
