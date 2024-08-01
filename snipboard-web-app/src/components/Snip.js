import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaBars, FaEdit, FaCopy, FaCheck } from 'react-icons/fa';
import '../styles/Snip.css'; // Import the CSS file

const Snip = ({ title, language, code, description }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative bg-zinc-800 border-black shadow-xl border-4 p-4 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <span className="text-white font-bold pb-2">{title}</span>
        <button 
          onClick={handleCopy} 
          className="absolute top-4 right-4 bg-[#1E1E1E] hover:bg-[#121212] text-white text-sm px-4 py-2 rounded flex items-center justify-center" 
          style={{ width: '100px' }}
        >
          {copied ? <FaCheck className="mr-2" /> : <FaCopy className="mr-2" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="dark-scrollbar">
        {code}
      </SyntaxHighlighter>
      <div className="flex justify-between items-center mt-2">
        <span className="text-white px-4 py-2 rounded text-xs font-bold">{language}</span>
        <div className="flex space-x-2">
          <button onClick={toggleExpanded} className="bg-[#1E1E1E] hover:bg-[#121212] text-white text-sm px-4 py-2 rounded flex items-center">
            <FaBars className="mr-2" /> {expanded ? 'Less' : 'More'}
          </button>
          <button className="bg-[#1E1E1E] hover:bg-[#121212] text-white text-sm px-4 py-2 rounded flex items-center">
            <FaEdit className="mr-2" /> Edit
          </button>
        </div>
      </div>
      <div className={`mt-2 text-white bg-[#2E2E2E] rounded-lg description ${expanded ? 'expanded' : ''}`}>
        <h3 className="font-bold mb-2">Description</h3>
        {description}
      </div>
    </div>
  );
};

export default Snip;