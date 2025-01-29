import React, { useState } from "react";
import PlayerListBox from "./PlayerListBox"; // Import the player list box

const TeamCard = ({ team, home_city, area_name, players_list }) => {
  const [isPlayerListVisible, setIsPlayerListVisible] = useState(false);

  const handleCardClick = () => {
    setIsPlayerListVisible((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCardClick}
        className="w-64 h-48 bg-white shadow-xl rounded-2xl flex flex-col justify-start items-start p-6 border border-gray-200 
        transition-all duration-300 hover:bg-gray-200 hover:shadow-2xl active:scale-95"
      >
        <div className="mb-2">
          <h2 className="text-xl font-bold text-gray-800">{team}</h2>
        </div>

        <div className="mb-2">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Home City:</span> {home_city}
          </p>
        </div>

        <div className="mb-2">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Area:</span> {area_name}
          </p>
        </div>
      </button>

      {/* Absolutely position the player list box on top of the team card */}
      {isPlayerListVisible && (
        <PlayerListBox
          players_list={players_list}
          onClose={() => setIsPlayerListVisible(false)}
        />
      )}
    </div>
  );
};

export default TeamCard;
