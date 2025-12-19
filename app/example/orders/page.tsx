"use client";
import { startTransition, useState } from "react";
import { orderAction } from "./actions/orders";
import { redirect } from "next/dist/server/api-utils";

export default function Page() {
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  ``;
  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await orderAction(status);
      } catch (err: Error | any) {
        alert(err.message ?? "Form error");
      }
    });
  };
  return (
    <div className="mx-auto max-w-md border p-4">
      <label htmlFor="">Status</label>
      <input onChange={(e) => setStatus(e.target.value)}></input>
      <div className="mt-5">
        <label htmlFor="">Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="bg-amber-50 text-black"
        ></input>
      </div>
      <div className="p-2 bg-gray-600 disabled:bg-gray-300 text-black">
        <button>Apply</button>
      </div>
      <div className="p-2 bg-gray-600 disabled:bg-gray-300 text-black mt-5">
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
}
