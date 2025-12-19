"use client";
import { useState, useTransition } from "react";
import { loginAction } from "./actions/login";
import { resolve } from "path";

export default function Page() {
  const [username, setUsername] = useState("");
  const [isPending, startTransition] = useTransition();
  //   const handleSubmit = async () => {
  //     try {
  //       await loginAction(username);
  //     } catch (err: Error | any) {
  //       alert(err.message ?? "Form-error");
  //     }
  //   };

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate delay
        await loginAction(username);
      } catch (err: Error | any) {
        alert(err.message ?? "Form error");
      }
    });
    //navigation will be pending and won't block the ui
    // can use state isPending to show loading indicator
  };
  return (
    <div className="mx-auto max-w-md border p-4">
      <label htmlFor="">Username</label>
      <input onChange={(e) => setUsername(e.target.value)} />
      <div>
        <button
          disabled={isPending}
          className="p-2 bg-gray-600 disabled:bg-gray-300 text-black"
          onClick={handleSubmit}
        >
          {isPending ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
