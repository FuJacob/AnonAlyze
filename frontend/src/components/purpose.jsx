import React from "react";
import { VT323 } from "next/font/google";

// Import the VT323 font
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Purpose = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-gray">
      <div className="grid grid-cols-1 gap-8 w-3/4">
        <div className={`text-center ${vt323.className}`}>
          <h1 className="text-3xl mb-5">What does Anonlyze do?</h1>
          <h3 className="text-2xl">
            Anonlyze is a cutting-edge tool designed to analyze social media
            profiles, providing deep insights into account security and content
            quality. By evaluating various data points, Anonlyze helps users
            understand potential vulnerabilities, risks, and areas for
            improvement, enabling them to maintain a safer and more engaging
            online presence.
          </h3>
        </div>

        <div className={`text-center ${vt323.className}`}>
          <h1 className="text-3xl mb-5">How Does AnonAlyze Score?</h1>
          <h3 className="text-2xl">
            Anonlyze is a cutting-edge tool designed to analyze social media
            profiles, providing deep insights into account security and content
            quality. By evaluating various data points, Anonlyze helps users
            understand potential vulnerabilities, risks, and areas for
            improvement, enabling them to maintain a safer and more engaging
            online presence.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
