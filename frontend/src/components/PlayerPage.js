import React, { useState, useEffect } from "react";
import axios from "axios";

function PlayerPage() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const backend_api = process.env.REACT_APP_BACKEND_API;

  useEffect(() => {
    axios
      .get(`${backend_api}/api/v1/players/`)
      .then((response) => setPlayers(response.data || []))
      .catch((error) => {
        console.error("Error fetching player details:", error);
        setPlayers([]);
      });
  }, [backend_api]);

  // Filter players based on search input
  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name, Position, or Nationality..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredPlayers.length > 0 ? (
        <div className="rounded-lg shadow-md">
          <div className="grid grid-cols-4 font-bold text-lg bg-blue-500 text-white py-2 px-4 rounded-t-lg text-left">
            <div>Name</div>
            <div>Position</div>
            <div>Nationality</div>
            <div>Team</div>
          </div>

          {filteredPlayers.map((player, index) => (
            <div
              key={player.id}
              className={`grid grid-cols-4 py-2 px-4 text-left ${
                index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
              }`}
            >
              <div>{player.name}</div>
              <div>{player.position}</div>
              <div>{player.nationality}</div>
              <div>{player.team}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No players found.</p>
      )}
    </div>
  );
}

export default PlayerPage;
