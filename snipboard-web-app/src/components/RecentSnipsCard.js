import React from 'react';
import Snip from './Snip';

const RecentSnipsCard = () => {
  // Placeholder data for recent snips
  const recentSnips = [
    { id: 1, title: 'Snippet 1', description: 'Description of snippet 1' },
    { id: 2, title: 'Snippet 2', description: 'Description of snippet 2' },
  ];


  const codeString = `
import React from 'react';

const App = () => {
  return <div>Hello, world!</div>;
};

export default App;
`;

  return (
    <div className="bg-darkBlue text-lightBlue p-4 rounded-xl shadow-l h-96">
        <h2 className="text-2xl font-bold mb-4">Recent Snips</h2>
        <div className="pt-4">
            <Snip language="javascript" code={codeString} />
        </div>
    </div>
  );
};

export default RecentSnipsCard;