import Link from "next/link";
import React from "react";

type Book = {
  id: number;
  name: string;
  author: string;
  type: string;
  price: number;
  "current-stock": string;
  available: boolean;
};

const BookDisplay = ({ book }: { book: Book }) => {
  return (
    <>
    <h1 className="mt-5 py-5 text-3xl font-semibold text-center">Book Details</h1>
      <div className="flex md:w-1/3 bg-white mx-5 md:mx-auto mt-5 p-5 rounded-xl shadow-xl">
        <div className="space-y-3">
          <p>Name:</p>
          <p>Author:</p>
          <p>Type:</p>
          <p>Status:</p>
          <p>Stock:</p>
          <p>Price:</p>
        </div>
        <div className="flex flex-col w-full pl-5 space-y-3">
          <p>{book.name}</p>
          <p>{book.author}</p>
          <p>{book.type}</p>
          <p>{book.available ? "In Stock" : "Out of Stock"}</p>
          <p>{book["current-stock"]}</p>
          <p>${book.price}</p>
          <Link href={"/"} className="ml-auto text-purple-600 underline">
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookDisplay;
