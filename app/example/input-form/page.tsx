"use client";

import { ChangeEvent, use, useState } from "react";
import { useLoginForm } from "./hooks/use-login";
export default function Page() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
  //     setEmail(e.target.value);
  //     // e- event, target -element, value- current value of input
  // }
  const { email, password, handleEmail, handlePassword, handleSubmit } =
    useLoginForm(); // destructure returned object from hook

  const from = useLoginForm(); //entire object

  return (
    <div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={from.email}
          onChange={from.handleEmail}
          className="bg-amber-200 ml-5 text-black"
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={from.password}
          onChange={from.handlePassword}
          className="ml-5 bg-amber-300 text-black"
        />
      </div>
      <button onClick={from.handleSubmit}> Test</button>
    </div>
  );
}
