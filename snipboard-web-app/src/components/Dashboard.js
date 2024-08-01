import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import DashboardSidebar from './DashboardSidebar';
import RecentSnipsCard from './RecentSnipsCard';
import SearchShortcutCard from './SearchShortcutCard';
import TipsCard from './TipsCard';
import BoardsCard from './BoardsCard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [activeButton, setActiveButton] = useState('home');

  const handleSignOut = async () => {
    try {
      const auth = getAuth(); // Initialize auth here
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
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <RecentSnipsCard />
            </div>
            <div className="md:col-span-1 flex flex-col gap-y-4 justify-between">
              <SearchShortcutCard />
              <BoardsCard />
            </div>
          </div>
        );
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
      <DashboardSidebar
        activeButton={activeButton}
        handleIconClick={handleIconClick}
        handleSignOut={handleSignOut}
      />

      {/* Divider */}
      <div className="w-1 bg-gray-900 opacity-30 ml-8"></div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-700 text-white p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-lightBlue">My Dashboard</h1>
        </div>
        {email && <p className="text-xl mb-8">Welcome, {email}</p>}
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-transparent pt-2 rounded-xl">
            <h2 className="text-2xl text-lightBlue font-bold mb-4"></h2>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;