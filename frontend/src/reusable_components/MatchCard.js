import React from "react";

const MatchCard = ({ teamA, teamB,teamAID, teamBID,areaID,areaName, league, date }) => {
  return (
    <button className="w-150 h-40 bg-white shadow-xl rounded-2xl flex flex-col justify-between items-start p-6 border border-gray-200 
      transition-all duration-300 hover:bg-gray-200 hover:shadow-2xl active:scale-95">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          {teamA} <span className="text-red-500">vs</span> {teamB}
        </h2>
      </div>
      <div>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">League:</span> {league}
        </p>
      </div>
      <div>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Area:</span> {areaName}
        </p>
      </div>
      <div>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Date Scheduled:</span> {date}
        </p>
      </div>
    </button>
  );
};

export default MatchCard;
