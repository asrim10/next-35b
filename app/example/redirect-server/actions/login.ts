"use server"; //optional
import { error } from "console";
import { redirect } from "next/navigation";

export async function loginAction(username: String) {
  if (!username) {
    throw new Error("Username is required");
  }
  if (username == "admin") {
    redirect("/example/input-form");
  } else {
    redirect("/example/state");
  }
}
