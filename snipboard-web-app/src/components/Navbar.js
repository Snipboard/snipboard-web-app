import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-darkBlue text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My Navbar</h1>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#features" className="hover:text-gray-300">Features</a></li>
                    <li><a href="#download" className="hover:text-gray-300">Download</a></li>
                    <li><a href="#about" className="hover:text-gray-300">About</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;