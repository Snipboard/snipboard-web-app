import React from 'react';

const BoardsCard = () => {
  // Placeholder data for tips
  const boards = [
    { id: 1, title: 'Maths', numOfSnips: 10, color: 'bg-pink-500' },
    { id: 2, title: 'React components', numOfSnips: 15, color: 'bg-green-500' },
    { id: 3, title: 'JavaScript', numOfSnips: 20, color: 'bg-yellow-500' },
    { id: 4, title: 'CSS', numOfSnips: 5, color: 'bg-purple-500' },
    { id: 5, title: 'HTML', numOfSnips: 8, color: 'bg-orange-500' },
  ];

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength -2) + '...';
    }
    return title;
  };

  return (
    <div className="p-4 bg-darkBlue rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Boards</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {boards.map(board => (
          <div key={board.id} className={`p-4 rounded shadow-md ${board.color} flex-grow-0 flex-shrink-0 flex flex-col justify-between`} style={{ width: 'calc(33.333% - 1rem)' }}>
            <div className="text-center text-white font-bold">{truncateTitle(board.title, 15)}</div>
            <div className="text-center text-white mt-2">{board.numOfSnips} Snips</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-6">
        <button className="bg-lightBlue text-darkBlue px-4 py-2 rounded">Add Board</button>
      </div>
    </div>
  );
};

export default BoardsCard;