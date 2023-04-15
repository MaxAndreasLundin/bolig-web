"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://bolig-api.vercel.app/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );


      if (response.ok) {
        const data = await response.json();
        console.log("Sign-up successful:", data);
      } else {
        console.error("Sign-up failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div className={styles.container}>
      {/* ... */}
      {/* Add the following form inside the main element, replacing one of the example cards */}
      <form onSubmit={handleSignup} className={styles.card}>
        <h2>Sign up &rarr;</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
      {/* ... */}
    </div>
  );
}
