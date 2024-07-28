// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Features from './Features';

// Custom hook to observe elements
const useFadeInOnScroll = () => {
    const elementsRef = useRef([]);

    const featuresMediaSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, { threshold: 0.5 }); // Adjust the threshold as needed

        elementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            if (elementsRef.current) {
                elementsRef.current.forEach(element => {
                    observer.unobserve(element);
                });
            }
        };
    }, []);

    return elementsRef;
};

const Home = () => {
    const elementsRef = useFadeInOnScroll();

    return (
        <div className="font-leagueSpartan bg-darkBlue text-lightBlue min-h-screen flex flex-col">
            <div>
                <Navbar />
            </div>

            <div id="home" className="flex flex-col items-center justify-start mt-12 min-h-screen">
                <div className="flex flex-col items-center text-center fade-in-section" ref={el => elementsRef.current[0] = el}>
                    <img src="images/SnipboardTitle.png" alt="Snipboard Title" className="mb-12" />
                    <p className="text-3xl font-semibold text-lightBlue mb-4">
                        If it works, <span className="text-lightRed">snip</span> it for later.
                    </p>
                    <p className="text-lg text-lightBlue">Spend a few seconds in our workflow and potentially save hours on yours.</p>
                    <div className="flex flex-col items-center mt-16 space-y-4 fade-in-section" ref={el => elementsRef.current[1] = el}>
                        <button className="bg-lightBlue hover:bg-blue text-darkBlue text-2xl font-bold py-3 px-6 rounded w-52 shadow-lg">
                            Get Started
                        </button>
                        <button className="bg-lightBlue hover:bg-blue text-darkBlue text-m font-bold py-2 px-4 rounded w-36">
                            View Features
                        </button>
                    </div>
                </div>
            </div>

            <div id="features" className="fade-in-section" ref={el => elementsRef.current[2] = el}>
                <Features />
            </div>
            
        </div>
    );
};

export default Home;
