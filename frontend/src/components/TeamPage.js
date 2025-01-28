import React, { useState, useEffect } from "react";

function TeamPage() {
  const [team, setTeam] = useState({});
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch team and players details
    fetch("http://localhost:8000/teams")
      .then((response) => response.json())
      .then((data) => {
        setTeam(data[0]); // Assuming you're fetching a single team, modify as needed
        setPlayers(data[0].players);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">{team.name}</h2>
      <p>Home City: {team.home_city}</p>
      <h3 className="text-lg font-semibold">Players:</h3>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} ({player.position}) - {player.goals} goals,{" "}
            {player.assists} assists
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamPage;
