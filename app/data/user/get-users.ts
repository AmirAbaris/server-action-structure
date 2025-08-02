import "server-only";
import { User } from "@/types/user-type";
import { requireUser } from "./require-user";

export async function getUsers() {
  await requireUser();

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("something went wrong");
  }

  const users: User[] = await res.json();
  return users;
}
