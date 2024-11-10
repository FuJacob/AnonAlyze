"use client";
import React, { useState } from 'react';
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

const rating = 8; // TEMPORARY PLACEHOLDER

const Hero = () => {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [pData, setPData] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = async () => {
        if (!inputValue) {
            alert('Please enter a valid username.');
            return;
        }
        setLoading(true);
        try {
            await fetch('http://localhost:5000/send-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: `https://www.instagram.com/${inputValue}/` }),
            });

            const response = await fetch('http://localhost:5000/analyze-privacy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ input: inputValue }),
                body: JSON.stringify({ inputUsername: `https://www.instagram.com/${inputValue}/` }),
            });
            const data = await response.json();
            console.log('Response from backend:', data);
            setPData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center text-white py-[7rem] mb-[-15rem]" id="hero">
            <div className='grid grid-cols-1 grid-rows-2'>
                <div className={`text-center ${vt323.className} text-3xl`}>
                    <p className="mb-10">Input your Instagram Username</p>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="text-black text-xl size-11 mb-10 p-6 w-80 h-14 border-2 border-gray-300 rounded text-center focus:ring-4 focus:ring-yellow-400"
                        placeholder="Enter your Instagram Username" />
                    <div className="flex justify-center">
                        <button
                            onClick={handleButtonClick}
                            type="button"
                            className="bg-white text-black border-2 border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-100">
                            AnonAlyze!
                        </button>
                    </div>
                    {/* Edit this for the UI component, keep loading && tho*/}
                    {loading && <p className="mt-5 mx-auto w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></p>}
                </div>

                <div className={`grid grid-cols-1 gap-4 ${pData ? 'block' : 'hidden'}`}>
                    {rating !== null && (
                        <div className={`border-2 border-gray-500 rounded-lg p-4 ${vt323.className} text-3xl ${glowEffect}`}>
                            <h2 className="text-center">{pData ? `Privacy Analysis of ${pData.rawData[0].url.replace("$", "").split("instagram.com/")[1].replace("/", "")}` : ``}</h2>
                            <div>
                                {pData ? (
                                    <div className='flex gap-3'>
                                        <div className="font-bold">Content Shared:</div>
                                        {pData.privacyAnalysis.contentShared}
                                    </div>
                                ) : ''}
                            </div>
                            <div>{pData ? `Sensitive Information: ${pData.privacyAnalysis.sensitiveInfo}` : ''}</div>
                            <div>{pData ? `Tagging Behaviour: ${pData.privacyAnalysis.taggingBehaviour}` : ''}</div>
                            <div>{pData ? `Privacy Improvements: ${pData.privacyAnalysis.privacyImprovements}` : ''}</div>
                            <p className="mt-4"><strong>{pData ? pData.privacyAnalysis.rating.replace("$", "") : ''}</strong></p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
