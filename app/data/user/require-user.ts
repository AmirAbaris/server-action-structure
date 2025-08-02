import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const requireUser = cache(async () => {
  const cookie = await cookies();
  const token = cookie.get("user")?.value;

  if (!token) {
    return redirect("/search"); // just for example
  }
});
