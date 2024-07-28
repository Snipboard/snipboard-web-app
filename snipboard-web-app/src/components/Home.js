// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import Features from './Features';

const Home = () => {
return (
    <div className="font-leagueSpartan bg-darkBlue text-lightBlue min-h-screen flex flex-col">
        <div>
            <Navbar />
        </div>

        <div id="home" className="flex flex-col items-center justify-start mt-24 min-h-screen">
            <div className="flex flex-col items-center text-center">
                <img src="images/SnipboardTitle.png" alt="Snipboard Title" className="mb-12" />
                <p className="text-3xl font-semibold text-lightBlue mb-4">
                    If it works, <span className="text-lightRed">snip</span> it for later.
                </p>
                <p className="text-lg text-lightBlue">Spend a few seconds in our workflow and potentially save hours on yours.</p>
                <div className="flex flex-col items-center mt-16 space-y-4">
                    <button className="bg-lightBlue hover:bg-blue text-darkBlue text-2xl font-bold py-3 px-6 rounded w-52 shadow-lg">
                        Get Started
                    </button>
                    <button className="bg-lightBlue hover:bg-blue text-darkBlue text-m font-bold py-2 px-4 rounded w-36">
                        View Features
                    </button>
                </div>
            </div>
        </div>

        <div id="features">
            <Features />
        </div>
        
    </div>
);
};

export default Home;
