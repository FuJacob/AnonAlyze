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
    <section className="min-h-screen flex items-center justify-center bg-dark-gray mt-[5rem]">
      <div className="grid grid-cols-1 gap-8 w-3/4">
        <div className={`text-center ${vt323.className}  backdrop-blur-5xl bg-black/40`}>
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

        <div className={`text-center ${vt323.className} mb-20 backdrop-blur-5xl bg-black/40`}>
          <h1 className="text-3xl mb-5">
            How does <b>AnonAlyze</b> score?
          </h1>
          <h3 className="text-2xl">
          <b>Content Shared</b>: The profile is public and shares multiple posts, including photos and videos, making the user’s information accessible to anyone.
<br/><br/>

<b>Sensitive Information</b>: The profile contains identifiable information, such as the full name "Marco Tonio," which can be used to track or recognize the user.
<br/><br/>


<b>Tagging Behavior</b>: The user tags locations like "Banff National Park" and "Las Vegas, Nevada," revealing their whereabouts and potentially compromising their privacy.
<br/>
<br/>

<b>Privacy Improvements</b>: To improve privacy, it's recommended to limit the sharing of personal details like the full name and use private account settings to control who can view the profile.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
