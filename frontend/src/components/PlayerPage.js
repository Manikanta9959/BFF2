import React, { useState, useEffect } from "react";

function PlayerPage({ playerId }) {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Fetch player details
    fetch(`http://localhost:8000/players/${playerId}`)
      .then((response) => response.json())
      .then((data) => setPlayer(data));
  }, [playerId]);

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
