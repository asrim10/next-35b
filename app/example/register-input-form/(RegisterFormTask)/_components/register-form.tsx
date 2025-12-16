"use client";

import { ChangeEvent, use, useState } from "react";
import { useRegisterFrom } from "../../hooks/use-register";

export default function RegisterForm() {
  const form = useRegisterFrom();

  return (
    <div>
      <div>
        <label htmlFor="">Email: </label>
        <input type="email" value={form.email} onChange={form.handleEmail} />
      </div>
      <div>
        <label htmlFor=""> Password: </label>
        <input
          type="password"
          onChange={form.handlePassword}
          value={form.password}
        />
      </div>
      <div>
        <label htmlFor=""> Confirm Password: </label>
        <input
          type="password"
          onChange={form.handleConfirmPassword}
          value={form.confirmPassword}
        />
      </div>
      <button onClick={form.handleSubmit}> Register</button>
    </div>
  );
}
