import { exampleAction } from "@/lib/action/example-actions";
import { notFound } from "next/navigation";

export default async function Page() {
  const result = await exampleAction();

  if (result.success) {
    throw new Error("Error");
  }

  if (result.data == null) {
    notFound();
  }

  return <div>Server Boundary Page</div>;
}
