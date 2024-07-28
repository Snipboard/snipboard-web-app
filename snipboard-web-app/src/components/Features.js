import React from 'react';
import '../styles/features.css'; // Ensure this CSS file exists for custom styles

const Features = () => {
    const features = [
        { id: 1, title: 'Feature 1', description: 'Short description for feature 1. This is an extended description to provide more details about the feature.', icon: 'M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l-2-2 1.414-1.414L8 9.172l4.586-4.586L14 6l-6 6z', iconColor: 'text-lightRed' },
        { id: 2, title: 'Feature 2', description: 'Short description for feature 2. This is an extended description to provide more details about the feature.', icon: 'M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l-2-2 1.414-1.414L8 9.172l4.586-4.586L14 6l-6 6z', iconColor: 'text-blue' },
        { id: 3, title: 'Feature 3', description: 'Short description for feature 3. This is an extended description to provide more details about the feature.', icon: 'M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l-2-2 1.414-1.414L8 9.172l4.586-4.586L14 6l-6 6z', iconColor: 'text-blue' },
        { id: 4, title: 'Feature 4', description: 'Short description for feature 4. This is an extended description to provide more details about the feature.', icon: 'M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l-2-2 1.414-1.414L8 9.172l4.586-4.586L14 6l-6 6z', iconColor: 'text-lightRed' },
    ];

    return (
        <div className="relative min-h-screen bg-darkBlue text-white font-leagueSpartan flex justify-center items-center">
            {/* Divider */}
            <div className="absolute top-0 left-50 pt-8 w-1/4 border-b border-gray-500"></div>

            {/* Content Wrapper */}
            <div className="w-3/4 max-w-5xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-5xl font-bold mt-3 text-center my-16 text-lightBlue">Features</h2>

                <div className="features-container">
                    <div className="features-list grid grid-cols-2 gap-8">
                        {features.map((feature) => (
                            <div key={feature.id} className="feature-item flex flex-col items-start text-left p-4">
                                <svg className={`w-8 h-8 mb-2 ${feature.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d={feature.icon} />
                                </svg>
                                <h3 className="text-lg font-bold">{feature.title}</h3>
                                <p className="text-sm mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="features-media">
                        <div className="h-full rounded flex items-center justify-center">
                            <img src="images/PlaceholderFeaturesMedia.png" alt="Feature Placeholder" className="w-full" />
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button className="bg-lightBlue text-white py-2 px-4 rounded">Web App</button>
                    <button className="py-2 px-4 rounded flex items-center">
                        <img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/HRs9MPufa1J1h5glNhut.png" alt="Chrome Logo" className="w-56 h-full mr-2" />
                    </button>
                    <button className="bg-[#007ACC] text-white py-2 px-4 rounded flex items-center">
                        <img src="images/vscode-logo.png" alt="VS Code Logo" className="w-5 h-5 mr-2" />
                        VS Code Extension
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Features;