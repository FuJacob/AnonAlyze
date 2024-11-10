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
        <section className="min-h-screen flex items-center justify-center text-white py-[7rem]" id="hero">
            <div className='grid grid-cols-1 grid-rows-2'>
                {/* Item 1 - Input and Button */}
                <div className={`text-center ${vt323.className} text-3xl`}>
                    <p className="mb-10">Try it</p>
                    <input
                        type="text"
                        className="mb-10 text-lg p-6 w-96 border-2 border-gray-300 rounded text-center"
                        placeholder="Enter your Instagram Username" />
                    <div className="flex justify-center">
                        <button
                            type="button" className="bg-white text-black border-2 border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-100">
                            AnonAlyze Me
                        </button>
                    </div>
                </div>

                {/* Item 2 and Item 3 - Profile and Placeholder Side by Side */}
                <div className="grid grid-cols-2 gap-4 mt-[-3rem]">
                    {/* Item 2 - Profile Data */}
                    <div className={`text-center ${vt323.className} text-3xl border-2 border-gray-500 rounded-lg p-4`}>
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

                    {/* Item 3 - Placeholder */}
                    <div className='border-2 border-gray-500 rounded-lg p-4'>
                        placeholder
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
