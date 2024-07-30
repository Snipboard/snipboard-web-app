import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { FaHome, FaChartBar, FaCog, FaQuestionCircle, FaSignOutAlt, FaCut } from 'react-icons/fa';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [activeButton, setActiveButton] = useState('home');

  useEffect(() => {
    setActiveButton('home');
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  const handleIconClick = (button) => {
    if (activeButton !== button) {
      setActiveButton(button);
    }
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'home':
        return <p>Home Content</p>;
      case 'snips':
        return <p>Snips Content</p>;
      case 'settings':
        return <p>Settings Content</p>;
      case 'help':
        return <p>Help Content</p>;
      default:
        return <p>Home Content</p>;
    }
  };

  return (
    <div className="flex min-h-screen font-leagueSpartan bg-darkBlue">
      {/* Sidebar */}
      <div className="bg-darkBlue text-white w-32 flex flex-col items-center py-8 justify-between">
        <div>
          <div className="mb-16 ml-16">
            {/* Placeholder for logo */}
            <img src="images/SnipboardIconCropped.png" alt="Logo" className="w-36 h-max p-2" />
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="mb-10">
              <div className="flex w-36 pb-4 pt-4 h-max bg-lightBlue text-darkBlue rounded-xl transition-all duration-300">
                <span className="text-l text-center font-bold pl-4 mr-2">Dashboard Menu</span>
              </div>
            </div>
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
        <div className="mt-8">
          <button onClick={handleSignOut} className="flex w-36 pb-4 pt-4 h-max bg-lightBlue text-darkBlue rounded-xl cursor-pointer hover:bg-blue transition-all duration-300">
            <span className="mr-2 font-bold text-end pl-8">Sign Out</span>
            <FaSignOutAlt className="text-2xl text-darkBlue" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-1 bg-gray-500 opacity-30 ml-8"></div>

      {/* Main Content */}
      <div className="flex-1 bg-darkBlue text-white p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-lightBlue">My Dashboard</h1>
        </div>
        {email && <p className="text-xl mb-8">Welcome, {email}</p>}
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-blue p-4 rounded">
            <h2 className="text-2xl font-bold mb-4">Content Section</h2>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;