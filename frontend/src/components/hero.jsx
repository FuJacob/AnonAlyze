'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const glowEffect = "shadow-[0_0_10px_rgba(255,255,255,0.5)]";

const profileData = {
    username: "pakmangames",
    fullName: "Andy",
    biography: "mac swe\n⋆･ ｡ﾟ *.* ☆ﾟ.☾ ⋆*･ﾟ:⋆*",
    followersCount: 234,
    followsCount: 363,
    profilePicUrl: "https://scontent-scl2-1.cdninstagram.com/v/t51.2885-19/356235487_1434762333987767_4094130844684754685_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=r0bhG7mvm6wQ7kNvgHeag9k&_nc_gid=46889b8d49474d29bee210694f42daf0&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAKKyopUV-wF6-h25uq2PUimNH8pMZR6n10vywA3mS2pw&oe=673573C6&_nc_sid=8b3546",
    profileUrl: "https://www.instagram.com/pakmangames/"
};

const Hero = () => {
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState(null);
    const [rating, setRating] = useState(null);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleAnalyzeClick = async () => {
        if (!username) {
            alert('Please enter a valid username.');
            return;
        }

        const profileUrl = `https://www.instagram.com/${username}/`;
        try {
            const response = await axios.post('http://localhost:3000/scrape-instagram', {
                profileUrl: profileUrl
            });

            if (response.data) {
                setProfile(response.data.profile);
                setRating(response.data.rating);
            }
        } catch (error) {
            console.error('Error scraping Instagram:', error);
            alert('There was an error fetching the Instagram profile. Please try again later.');
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center text-white py-[7rem] mb-[-15rem]" id="hero">
            <div className='grid grid-cols-1 grid-rows-2'>
                <div className={`text-center ${vt323.className} text-3xl`}>
                    <p className="mb-10">Input your Instagram Username</p>
                    <input
                        type="text"
                        className="text-black text-xl size-10 mb-10 p-6 w-96 border-2 border-gray-300 rounded text-center"
                        placeholder="Enter your Instagram Username"
                        value={username}
                        onChange={handleInputChange}
                    />
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="bg-white text-black border-2 border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-100"
                            onClick={handleAnalyzeClick}
                        >
                            AnonAlyze!
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-[-3rem]">
                    {profile && (
                        <div className={`text-center ${vt323.className} ${glowEffect} text-3xl border-2 border-gray-500 rounded-lg p-4`}>
                            <img
                                src={profile.profilePicUrl}
                                alt={`${profile.username} profile`}
                                className="rounded-full w-32 h-32 mx-auto mb-4"
                            />
                            <h1 className="text-4xl font-bold">{profile.fullName}</h1>
                            <p className="mt-1 text-2xl">@{profile.username}</p>
                            <p className="mt-2 text-lg whitespace-pre-line">{profile.biography}</p>
                            <p className="mt-4">
                                Followers: {profile.followersCount} | Following: {profile.followsCount}
                            </p>
                            {profile.profileUrl && (
                                <a
                                    href={profile.profileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 mt-4 inline-block"
                                >
                                    View Instagram Profile
                                </a>
                            )}
                        </div>
                    )}

                    {rating !== null && (
                        <div className={`border-2 border-gray-500 rounded-lg p-4 ${vt323.className} text-3xl ${glowEffect}`}>
                            Based on the provided Instagram profile data, it appears that the user ({profile.username}) exercises a moderate level of privacy regarding their personal information. They share videos and captions related to their sports activities, specifically basketball, badminton, and gym workouts, but do not disclose sensitive personal information such as their full name, address, phone number, or email address. However, they frequently mention and tag friends and their university, which could potentially help identify them to acquaintances or those in their community.

                            <p className="mt-4"><strong>Privacy Rating: {rating}/10</strong></p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
