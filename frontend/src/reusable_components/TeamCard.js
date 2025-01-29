import React from "react";

const TeamCard = ({ key, team, home_city, area_id }) => {
  return (
    <button className="w-64 h-40 bg-white shadow-xl rounded-2xl flex flex-col justify-between p-6 border border-gray-200 
      transition-all duration-300 hover:bg-gray-200 hover:shadow-2xl active:scale-95">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">
          Team name: {team}
        </h2>
      </div>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Home city:</span> {home_city}
        </p>
      </div>

      <div className="text-center">
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Area:</span> {area_id}
        </p>
      </div>
    </button>
  );
};

export default TeamCard;
