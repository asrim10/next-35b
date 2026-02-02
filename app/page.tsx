"use client"; // component must be client when using context
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
export default function Home() {
  const { user, logout } = useAuth();
  return (
    <div>
      HomePage {user ? `Welcome, ${user.email}` : "Not logged in"}
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
}
