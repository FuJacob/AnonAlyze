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
        <div className={`text-center ${vt323.className} mb-20`}>
          <h1 className="text-3xl mb-5">
            What does <b>AnonAlyze</b> do?
          </h1>
          <h3 className="text-2xl">
            AnonAlyze is an innovative tool designed to help individuals assess
            the risks their social media presence poses to their privacy and
            security. By analyzing social media profiles for potential
            vulnerabilities, such as oversharing personal information or
            exposing sensitive data, AnonAlyze educates users on how to identify
            and mitigate privacy threats. This tool empowers users to make
            informed decisions about their digital footprint, enhancing
            awareness of online security in a practical, user-friendly way.
          </h3>
        </div>

        <div className={`text-center ${vt323.className}`}>
          <h1 className="text-3xl mb-5">
            How does <b>AnonAlyze</b> score?
          </h1>
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
