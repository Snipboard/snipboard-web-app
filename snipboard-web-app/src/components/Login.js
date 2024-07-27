import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../firebase';
import { FaGoogle, FaGithub } from 'react-icons/fa';

import '../styles/index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Placeholder for email login
    alert('Email login not implemented yet');
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      if (result && result.user) {
        const userEmail = result.user.email;
        navigate('/dashboard', { state: { email: userEmail } });
      } else {
        setError('Google sign-in failed. Please try again.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen flex font-leagueSpartan">
      <div className="absolute inset-0 bg-darkBlue"></div>
      <div className="absolute inset-0 w-full h-full bg-slate-700" style={{ clipPath: 'polygon(0 0, 40% 0, 60% 100%, 0 100%)' }}></div>
      <div className="relative flex-1 flex items-center justify-center">
        <div className="bg-darkBlue p-8 rounded-lg shadow-md w-full max-w-md border-lightBlue">
          <h2 className="text-2xl font-bold mb-6 text-center text-lightBlue">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-lightBlue mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lightBlue mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-lightBlue text-darkBlue py-2 rounded flex items-center justify-center"
            >
              <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="Profile icon" className="mr-2" style={{ width: '20px', height: '20px' }} />
              <span className="mr-2">Login</span>
            </button>
            <div className="text-right">
              <a href="#" className="text-lightBlue hover:underline">Forgot Password?</a>
            </div>
            <div className="text-center text-lightBlue mt-4">Or login with socials...</div>
            <div className="flex justify-center space-x-4 mt-4">
            <button
                onClick={handleGoogleLogin}
                className="bg-white text-black p-3 rounded-full flex items-center justify-center border border-gray-300"
                >
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="Google logo" style={{ width: '23px', height: '23gitpx' }} />
                </button>
              <button
                onClick={() => alert('Microsoft login not implemented yet')}
                className="bg-white text-blue-600 p-3 rounded-full flex items-center justify-center"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft logo" style={{ width: '23px', height: '23px' }} />
              </button>
              <button
                onClick={() => alert('GitHub login not implemented yet')}
                className="bg-gray-800 text-white p-3 rounded-full flex items-center justify-center"
                >
                <FaGithub style={{ width: '23px', height: '23px' }} />
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 flex flex-col justify-between items-end p-8">
        <div className="text-center text-lightBlue">
          <p className="text-xl">Tip of the day:</p>
          <p className="text-lg">Stay positive and keep coding!</p>
        </div>
        <div className="text-lightBlue">
          <p className="text-2xl">Your Logo</p>
        </div>
      </div>
    </div>
  );
};

export default Login;