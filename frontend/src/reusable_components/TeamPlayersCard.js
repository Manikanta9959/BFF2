import React from "react";

const TeamPlayersCard = ({ isOpen, onClose, teamA, teamB, teamAPlayers, teamBPlayers }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg relative">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">{teamA} vs {teamB}</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold">{teamA}</h3>
            <ul className="mt-2">
              {teamAPlayers.length > 0 ? (
                teamAPlayers.map((player, index) => (
                  <li key={`${teamA}-${index}`} className="text-gray-700">{player}</li>
                ))
              ) : (
                <p className="text-sm text-gray-500">No players found</p>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{teamB}</h3>
            <ul className="mt-2">
              {teamBPlayers.length > 0 ? (
                teamBPlayers.map((player, index) => (
                  <li key={`${teamB}-${index}`} className="text-gray-700">{player}</li>
                ))
              ) : (
                <p className="text-sm text-gray-500">No players found</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPlayersCard;
