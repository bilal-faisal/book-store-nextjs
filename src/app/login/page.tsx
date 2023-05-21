"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

async function verifyToken(user: string) {
  // try {
  //   let res = await fetch("/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: user,
  //     cache: "no-store",
  //   });

  //   if (!res.ok) {
  //     throw new Error("Something went Wrong!");
  //   }
  //   return res.json();
  // } catch (error) {
  //   return error;
  // }
}

const Register = () => {
  let router = useRouter();
  const [user, setUser] = useState({ token: ""});

  function handleChange(e: any) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(user.token)
    // let data = await verifyToken(JSON.stringify(user));
    // if (data.error) {
    //   alert(data.error);
    // } else {
    //   localStorage.setItem("authToken", user.token);
    //   router.back();
    // }
  }
  return (
    <>
      <h1 className="mt-8 mb-4 py-2 text-3xl font-semibold text-center">
        Login
      </h1>
      <form className="flex flex-col md:w-1/4 mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="token">Token:</label>
        <input
          type="text"
          id="token"
          name="token"
          placeholder="Token..."
          className="p-1 rounded-md mt-1 mb-2"
          value={user.token}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white bg-gray-800 px-3 py-2 my-4 w-1/2 mx-auto rounded-md border hover:bg-gray-900"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Register;
