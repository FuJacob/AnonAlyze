import React from "react";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

let userName;

const submit = () => {
  return (
    <>
     <section className="min-h-screen flex items-center justify-center bg-dark-gray">
     <div className={`text-center ${vt323.className} text-3xl`}>
    <p className="mb-10">Try it</p>
    <input
  type="text"
  className="mb-10 text-lg p-6 w-96 border-2 border-gray-300 rounded text-center"
  placeholder="Enter your Instagram Username"/>
      <div className="flex justify-center">
      <button
        type="button" className="bg-white text-black border-2 border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-100">
        Anonalyze Me
      </button></div> </div> </section>
    </>
  );
};

export default submit;
