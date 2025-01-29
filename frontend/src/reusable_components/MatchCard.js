import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamPlayersCard from "./TeamPlayersCard";

const MatchCard = ({ teamA, teamB, teamAID, teamBID, areaID, areaName, league, date }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamAPlayers, setTeamAPlayers] = useState([]);
  const [teamBPlayers, setTeamBPlayers] = useState([]);
  const backend_api = process.env.REACT_APP_BACKEND_API;

  useEffect(() => {
    if (isModalOpen) {
      // Fetch team players when modal is opened
      Promise.all([
        axios.get(`${backend_api}/api/v1/players/`, { params: { team_id: teamAID } }),
        axios.get(`${backend_api}/api/v1/players/`, { params: { team_id: teamBID } }),
      ])
        .then(([responseA, responseB]) => {
          // Set the team A and team B players if requests are successful
          setTeamAPlayers(responseA.data || []);
          setTeamBPlayers(responseB.data || []);
        })
        .catch(() => {
          // Reset players if API requests fail
          setTeamAPlayers([]);
          setTeamBPlayers([]);
        });
    }
  }, [isModalOpen, backend_api, teamAID, teamBID]);

  return (
    <>
      <button
        className="w-150 h-50 bg-white shadow-xl rounded-2xl flex flex-col justify-start items-start p-6 border border-gray-200 
      transition-all duration-300 hover:bg-gray-200 hover:shadow-2xl active:scale-95"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full">
          <h2 className="text-xl font-bold text-gray-800">
            {teamA} <span className="text-red-500">vs</span> {teamB}
          </h2>
        </div>
        <div className="w-full mt-2">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">League:</span> {league}
          </p>
        </div>
        <div className="w-full mt-1">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Area:</span> {areaName}
          </p>
        </div>
        <div className="w-full mt-1">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Date Scheduled:</span> {date}
          </p>
        </div>
      </button>

      <TeamPlayersCard
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        teamA={teamA}
        teamB={teamB}
        teamAID={teamAID}
        teamBID={teamBID}
        backend_api={backend_api}
        teamAPlayers={teamAPlayers}
        teamBPlayers={teamBPlayers}
      />
    </>
  );
};

export default MatchCard;
