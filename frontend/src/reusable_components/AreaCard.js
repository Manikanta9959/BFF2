import React, { useState } from "react";
import PlayerListBox from "./PlayerListBox";

const AreaCard = ({ id, city, country, teams_list }) => {
    const [isTeamListVisible, setIsTeamListVisible] = useState(false);
    const handleCardClick = () => {
        setIsTeamListVisible((prevState) => !prevState);
    };


    return (
        <div className="relative">
          <button
            onClick={handleCardClick}
            className="w-64 h-48 bg-white shadow-xl rounded-2xl flex flex-col justify-start items-start p-6 border border-gray-200 
            transition-all duration-300 hover:bg-gray-200 hover:shadow-2xl active:scale-95"
          >
    
            <div className="mb-2">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">City: </span> {city}
              </p>
            </div>
    
            <div className="mb-2">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Country: </span> {country}
              </p>
            </div>
          </button>
    
          {isTeamListVisible && (
            <PlayerListBox
              label = {"Teams"}
              players_list={teams_list}
              onClose={() => setIsTeamListVisible(false)}
            />
          )}
        </div>
      );
  
};

export default AreaCard;
