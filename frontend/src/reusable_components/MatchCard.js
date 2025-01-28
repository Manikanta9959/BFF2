import React from "react";

const MatchCard = ({ teamA, teamB, league, date }) => {
  return (
    <div className="w-64 h-40 bg-white shadow-xl rounded-2xl flex flex-col justify-between p-8 border border-gray-200">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">
          {teamA} <span className="text-red-500">vs</span> {teamB}
        </h2>
      </div>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">League:</span> {league}
        </p>
      </div>

      <div className="text-center">
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Date Scheduled:</span> {date}
        </p>
      </div>
    </div>
  );
};

export default MatchCard;
