import React from "react";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <div className="w-full h-[90vh]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-400 text-base font-light">You haven't placed any orders today</p>
        <Link to={"/"} className="mt-2 px-5 py-2.5 rounded text-white bg-blue-500 hover:bg-blue-400">
          Get started
        </Link>
      </div>
    </div>
  );
} 