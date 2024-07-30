import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Snip = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-zinc-800 border-black shadow-xl border-4 p-4 rounded-xl">
        <div className="flex justify-between items-center mb-2">
            <span className="text-white font-bold pb-2">{language}</span>
            <button 
              onClick={handleCopy} 
              className="absolute top-4 right-4 bg-[#1E1E1E] hover:bg-[#121212] text-white text-sm px-4 py-2 rounded-l" 
              style={{ width: '80px' }}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
            {code}
        </SyntaxHighlighter>
    </div>
  );
};

export default Snip;