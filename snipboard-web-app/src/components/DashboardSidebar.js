// DashboardSidebar.js
import React from 'react';
import { FaHome, FaCut, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

const DashboardSidebar = ({ activeButton, handleIconClick, handleSignOut }) => {
  return (
    <div className="bg-darkBlue text-white w-32 flex flex-col items-center py-8 justify-between">
      <div>
        <div className="mb-16 ml-16">
          {/* Placeholder for logo */}
          <img src="images/SnipboardIconCropped.png" alt="Logo" className="w-36 h-max p-2" />
        </div>
        <div className="flex flex-col items-center space-y-5">
          <div
            className={`flex items-center justify-center pl-16 w-32 h-12 bg-lightBlue text-darkBlue rounded-xl cursor-pointer hover:bg-blue transition-all duration-300 ${activeButton === 'home' ? 'mr-16' : 'mr-32'}`}
            data-tooltip="Home"
            onClick={() => handleIconClick('home')}
          >
            <FaHome className="text-2xl" />
          </div>
          <div
            className={`flex items-center justify-center pl-16 w-32 h-12 bg-lightBlue text-darkBlue rounded-xl cursor-pointer hover:bg-blue transition-all duration-300 ${activeButton === 'snips' ? 'mr-16' : 'mr-32'}`}
            data-tooltip="Snips"
            onClick={() => handleIconClick('snips')}
          >
            <FaCut className="text-2xl" />
          </div>
          <div
            className={`flex items-center justify-center pl-16 w-32 h-12 bg-lightBlue text-darkBlue rounded-xl cursor-pointer hover:bg-blue transition-all duration-300 ${activeButton === 'help' ? 'mr-16' : 'mr-32'}`}
            data-tooltip="Help"
            onClick={() => handleIconClick('help')}
          >
            <FaQuestionCircle className="text-2xl" />
          </div>
          <div
            className={`flex items-center justify-center pl-16 w-32 h-12 bg-lightBlue text-darkBlue rounded-xl cursor-pointer hover:bg-blue transition-all duration-300 ${activeButton === 'settings' ? 'mr-16' : 'mr-32'}`}
            data-tooltip="Settings"
            onClick={() => handleIconClick('settings')}
          >
            <FaCog className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="mt-8 mr-6">
        <button onClick={handleSignOut} className="flex w-36 pb-4 pt-4 h-max bg-lightRed text-lightBlue rounded-xl cursor-pointer hover:bg-darkRed transition-all duration-300">
          <span className="mr-2 font-bold text-end pl-8">Sign Out</span>
          <FaSignOutAlt className="text-2xl text-lightBlue" />
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;