import React from "react";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const header = () => {
  return (
    <>
      <section className="mt-16 px-6 py-10" id="about">
        <div
          className={`text-center text-neutral- ${vt323.className} text-3xl`}
        >
          <div className="flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Analyze Logo"
              className="w-1/3"
            />
          </div>
          <h1 className='text-5xl animate-pulse mb-[-5rem] mt-7'>Unmasking Risks, Protecting Privacy</h1>
        </div>
      </section>
    </>
  );
};

export default header;
