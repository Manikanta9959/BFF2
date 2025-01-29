import React from "react";

const PlayerListBox = ({ label, players_list, onClose }) => {
  return (
    <div
      className="absolute top-20 left-0 w-60 p-4 bg-gray-100 rounded-xl shadow-md border border-gray-200 z-10"
      style={{ zIndex: 10 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">{label}</h3>
        <button
          onClick={onClose}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          Close
        </button>
      </div>
      <ul className="list-disc pl-5 mt-2">
        {players_list.map((player, index) => (
          <li key={index} className="text-gray-700">
            {player}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerListBox;
