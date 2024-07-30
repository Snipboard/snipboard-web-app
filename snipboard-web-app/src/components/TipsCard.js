import React from 'react';

const TipsCard = () => {
  // Placeholder data for tips
  const tips = [
    { id: 1, tip: 'Tip 1: Use keyboard shortcuts to speed up your workflow.' },
    { id: 2, tip: 'Tip 2: Organize your snips into categories.' },
  ];

  return (
    <div className="bg-lightBlue p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tips</h2>
      <ul>
        {tips.map(tip => (
          <li key={tip.id} className="mb-2">
            <p>{tip.tip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TipsCard;