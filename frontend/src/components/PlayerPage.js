import React, { useState, useEffect } from "react";
import axios from "axios"; 

function PlayerPage({ playerId }) {
  const [player, setPlayer] = useState(null);
  const backend_api = process.env.REACT_APP_BACKEND_API;

  useEffect(() => {
    axios
      .get(`${backend_api}/players/${playerId}`)
      .then((response) => setPlayer(response.data))
      .catch((error) => {
        console.error("Error fetching player details:", error);
        setPlayer(null); 
      });
  }, [playerId, backend_api]);

  return player ? (
    <div>
      <h2 className="text-xl font-bold">{player.name}</h2>
      <p>Position: {player.position}</p>
      <p>Nationality: {player.nationality}</p>
      <p>Goals: {player.goals}</p>
      <p>Assists: {player.assists}</p>
    </div>
  ) : (
    <p>Loading player details...</p>
  );
}

export default PlayerPage;
