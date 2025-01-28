import React, { useState, useEffect } from "react";
import axios from "axios";

function TeamPage() {
  const [team, setTeam] = useState({});
  const [players, setPlayers] = useState([]);
  const backend_api = process.env.REACT_APP_BACKEND_API;

  useEffect(() => {
    axios
      .get(`${backend_api}/api/v1/teams/`)
      .then((response) => {
        setTeam(response.data[0]); 
        setPlayers(response.data[0].players); 
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setTeam({});
        setPlayers([]); 
      });
  }, [backend_api]);

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
