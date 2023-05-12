"use client";
import React, { useState } from "react";

async function getAuth(user: string) {
  let res = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: user,
    cache: "no-store",
  });

  let data = await res.json();
  console.log(data);
  if(data.error){
    console.log("Error")
  }else{
    console.log("Success")
  }
}

const Register = () => {
  const [user, setUser] = useState({ clientName: "", clientEmail: "" });

  function handleChange(e: any) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    getAuth(JSON.stringify(user));
  }
  return (
    <>
      <h1 className="mt-8 mb-4 py-2 text-3xl font-semibold text-center">
        Register
      </h1>
      <form className="flex flex-col md:w-1/4 mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="clientName">Name:</label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          placeholder="name..."
          className="p-1 rounded-md mt-1 mb-2"
          value={user.clientName}
          onChange={handleChange}
          required
        />
        <label htmlFor="clientEmail">Email:</label>
        <input
          type="email"
          id="clientEmail"
          name="clientEmail"
          placeholder="email..."
          className="p-1 rounded-md mt-1 mb-2"
          value={user.clientEmail}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white bg-gray-800 px-3 py-2 my-4 w-1/2 mx-auto rounded-md border hover:bg-gray-900"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
