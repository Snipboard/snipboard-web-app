import React, { useState } from 'react';
import '../styles/features.css'; // Ensure this CSS file exists for custom styles

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(null);

    const features = [
        { id: 1, title: 'Feature 1', description: 'Enlarged description for feature 1.' },
        { id: 2, title: 'Feature 2', description: 'Enlarged description for feature 2.' },
        { id: 3, title: 'Feature 3', description: 'Enlarged description for feature 3.' },
        { id: 4, title: 'Feature 4', description: 'Enlarged description for feature 4.' },
    ];

    const handleClick = (id) => {
        setActiveFeature(id);
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setActiveFeature(null);
    };

    return (
        <div className="flex flex-row bg-darkBlue p-4 min-h-screen">
            <div className="w-1/2 pr-96"> {/* Adjusted padding */}
                <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
                <div className="grid grid-cols-2">
                    {features.map((feature) => (
                        <button
                            key={feature.id}
                            className={`feature-button bg-lightBlue text-darkBlue p-2 rounded flex flex-col items-center justify-center transition-all duration-300 ${
                                activeFeature === feature.id ? 'col-span-2 row-span-2' : ''
                            }`}
                            style={{
                                height: activeFeature === feature.id ? '100%' : '150px',
                                width: activeFeature === feature.id ? '100%' : '150px',
                                marginBottom: '16px', // Added margin-bottom for row gap
                            }}
                            onClick={() => handleClick(feature.id)}
                        >
                            {activeFeature === feature.id ? (
                                <div className="flex flex-col items-start w-full h-full p-4">
                                    <div className="flex justify-between w-full">
                                        <h3 className="text-2xl font-bold">{feature.title}</h3>
                                        <button onClick={handleClose} className="text-red-500">
                                            Close
                                        </button>
                                    </div>
                                    <p className="text-lg mt-4">{feature.description}</p>
                                </div>
                            ) : (
                                <>
                                    <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l-2-2 1.414-1.414L8 9.172l4.586-4.586L14 6l-6 6z" />
                                    </svg>
                                    <h3 className="text-lg font-bold">{feature.title}</h3>
                                </>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-1/2 pl-2"> {/* Adjusted padding */}
                {/* Placeholder for media content */}
                <div className="bg-gray-700 h-3/4 rounded flex items-center justify-center"> {/* Adjusted height */}
                    <p className="text-white">Media Content Here</p>
                </div>
            </div>
        </div>
    );
};

export default Features;