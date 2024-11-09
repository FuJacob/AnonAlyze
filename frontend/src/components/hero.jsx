import React from 'react';
import { VT323 } from 'next/font/google';

// Configure the VT323 font
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// JSON data for a private profile
const profileData = {
    username: "ashvinfittech",
    biography: "otu tron ‘27\ngym | fitness | otech \n@ashvinns",
    followersCount: 149,
    followsCount: 144,
    profilePicUrl: "https://instagram.fdet3-1.fna.fbcdn.net/v/t51.2885-19/461764416_555826633684382_786518577746789413_n.jpg",
    externalUrl: "https://youtube.com/@ashvinfittech?si=umng39dKcC7yThHD",
    profileUrl: "https://www.instagram.com/pakmangames/"
  };

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-gray text-white" id="hero">
      <div className={`text-center ${vt323.className} text-3xl`}>
        <img
          src={profileData.profilePicUrl}
          alt={`${profileData.username} profile`}
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">{profileData.fullName}</h1>
        <p className="mt-1 text-2xl">@{profileData.username}</p>
        <p className="mt-2 text-lg whitespace-pre-line">{profileData.biography}</p>
        <p className="mt-4">
          Followers: {profileData.followersCount} | Following: {profileData.followsCount}
        </p>
        {profileData.profileUrl && (
          <a
            href={profileData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-4 inline-block"
          >
            View Instagram Profile
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
