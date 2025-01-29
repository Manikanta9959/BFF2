import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamCard from "../reusable_components/TeamCard";

function TeamPage() {
  const [teams, setTeam] = useState([]);
  const [players, setPlayers] = useState([]);
  const backend_api = process.env.REACT_APP_BACKEND_API;

  useEffect(() => {
    axios
      .get(`${backend_api}/api/v1/teams/`)
      .then((response) => {
        setTeam(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setTeam([]);
      });
  }, [backend_api]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-1">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={`Team: ${team.name}`}
          home_city={team.home_city}
          area_name={team.area_name}  
          players_list={team.players_list}  
        />
      ))}
    </div>
  );
}

export default TeamPage;
