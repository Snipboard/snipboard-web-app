import React from 'react';

const SearchShortcutCard = () => {
  return (
    <div className="bg-darkBlue p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Search</h2>
      <p>Quickly find your snips using the search function.</p>
      <button className="mt-4 bg-lightBlue text-darkBlue py-2 px-4 rounded">Go to Search</button>
    </div>
  );
};

export default SearchShortcutCard;