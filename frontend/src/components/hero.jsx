"use client";
import React, { useState } from 'react';
import { VT323 } from 'next/font/google';

// Configure the VT323 font
const vt323 = VT323({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const glowEffect = "shadow-[0_0_10px_rgba(255,255,255,0.5)]";

// JSON data for a private profile
const profileData = {
    username: "pakmangames",
    fullName: "Andy",
    biography: "mac swe\n⋆･ ｡ﾟ *.* ☆ﾟ.☾ ⋆*･ﾟ:⋆*",
    followersCount: 234,
    followsCount: 363,
    profilePicUrl: "https://scontent-scl2-1.cdninstagram.com/v/t51.2885-19/356235487_1434762333987767_4094130844684754685_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=r0bhG7mvm6wQ7kNvgHeag9k&_nc_gid=46889b8d49474d29bee210694f42daf0&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAKKyopUV-wF6-h25uq2PUimNH8pMZR6n10vywA3mS2pw&oe=673573C6&_nc_sid=8b3546",
    profileUrl: "https://www.instagram.com/pakmangames/"
};

const handleButtonClick = async () => {
    try {
        const response = await fetch('http://localhost:5000/send-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ input: inputValue }),
            body: JSON.stringify({ input: `https://www.instagram.com/${inputValue}/` }),
        });
        const data = await response.json();
        console.log('Response from backend:', data);
    } catch (error) {
        // console.error('Error:', error);
        console.log(error);
    }
};

const Hero = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = async () => {
        try {
            const response = await fetch('http://localhost:5000/send-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ input: inputValue }),
                body: JSON.stringify({ input: `https://www.instagram.com/${inputValue}/` }),
            });
            const data = await response.json();
            console.log('Response from backend:', data);
        } catch (error) {
            // console.error('Error:', error);
            console.log(error);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center text-white py-[7rem] mb-[-15rem]" id="hero">
            <div className='grid grid-cols-1 grid-rows-2'>
                {/* Item 1 - Input and Button */}
                <div className={`text-center ${vt323.className} text-3xl`}>
                    <p className="mb-10">Input your Instagram URL</p>
                    <input
                        type="text"
                        valye={inputValue}
                        onChange={handleInputChange}
                        className="text-black text-xl size-11 mb-10 p-6 w-80 h-24 border-2 border-gray-300 rounded text-center focus:ring-4 focus:ring-yellow-400"
                        placeholder="Enter your Instagram Username" />
                    <div className="flex justify-center">
                        <button
                            onClick={handleButtonClick}
                            type="button" 
                            className="bg-white text-black border-2 border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-100">
                            AnonAlyze!
                        </button>
                    </div>
                </div>

                {/* Item 2 and Item 3 - Profile and Placeholder Side by Side */}
                <div className="grid grid-cols-2 gap-4 mt-[-3rem]">
                    {/* Item 2 - Profile Data */}
                    <div className={`text-center ${vt323.className} ${glowEffect} text-3xl border-2 border-gray-500 rounded-lg p-4`}>
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
                    <div className={`border-2 border-gray-500 rounded-lg p-4 ${vt323.className} text-3xl ${glowEffect}`}>
                    Based on the provided Instagram profile data, it appears that the user (`ashvinfittech`) exercises a moderate level of privacy regarding their personal information. They share videos and captions related to their sports activities, specifically basketball, badminton, and gym workouts, but do not disclose sensitive personal information such as their full name, address, phone number, or email address. However, they frequently mention and tag friends and their university, which could potentially help identify them to acquaintances or those in their community.\n\n**Privacy Rating: 7/10**
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
