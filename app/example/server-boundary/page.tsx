import { exampleAction } from "@/lib/action/example-actions";

export default async function Page() {
  const result = await exampleAction();
  return <div>Server Boundary Page</div>;
}
