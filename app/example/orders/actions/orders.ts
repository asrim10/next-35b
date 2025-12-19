"use server"; //optional
import { redirect } from "next/navigation";

export async function orderAction(status: String) {
  if (status == "active") {
    redirect("/example/orders/success");
  }
  if (status == "inactive") {
    redirect("/example/orders/failure");
  }
}
