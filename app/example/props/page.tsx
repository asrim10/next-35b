"use client";
import { useState } from "react";

export default function Page() {
  return (
    <div>
      <Component />
    </div>
  );
}
function Component() {
  const data = 10;
  const [count, setCount] = useState(0);
  const title = 123;
  return (
    <div>
      Parent
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <button onClick={() => setCount(count - 1)}>Decrement {count}</button>
      <ChildComponent data={data} count={count} title={title} />
    </div>
  );
}
function ChildComponent({
  data,
  count,
  title,
}: {
  data: number;
  count: number;
  title: number;
}) {
  return (
    <div>
      Child Component {data} {count}
      <AnotherChildComponent title={title} />
    </div>
  );
}
interface Props {
  title: number;
}
function AnotherChildComponent({ title }: Props) {
  return <div>Another Child Component {title}</div>;
}
