"use server";

export async function createPost(formData: FormData): Promise<void> {
  const title = formData.get("title");
  const body = formData.get("body");
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ title, body }),
  });

  if (!response.ok) {
    throw new Error("something went wrong");
  }
  console.log(response.status);
}
