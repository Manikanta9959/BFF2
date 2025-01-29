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
        // setPlayers(response.data.players); 
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setTeam([]);
        // setPlayers([]); 
      });
  }, [backend_api]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-1">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={`Team ${team.name}`}
            home_city={team.home_city}
            area_id={team.area_id}
          />
        ))}
      </div>
  );
}

export default TeamPage;
