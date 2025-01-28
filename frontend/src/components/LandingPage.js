import React, { useState, useEffect } from "react";
import axios from "axios";
import Matches from "./Matches";
import MatchCard from "../reusable_components/MatchCard";
import Filters from "./Filters";

function LandingPage() {
  const [matches, setMatches] = useState([]);
  const [areas, setAreas] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [filters, setFilters] = useState({ competition: "", area: "" });
  const backend_api = process.env.REACT_APP_BACKEND_API; 

  useEffect(() => {
    console.log("heyyyyyyyyyyyyyyyyy")
    console.log(backend_api)
    axios
      .get(`${backend_api}/api/v1/matches/`)
      .then((response) => setMatches(response.data))
      .catch(() => setMatches([]));

    axios
      .get(`${backend_api}/api/v1/matches/leagues/`)
      .then((response) => setLeagues(response.data))
      .catch(() => setLeagues([]));

    axios
      .get(`${backend_api}/api/v1/areas/`)
      .then((response) => setAreas(response.data))
      .catch(() => setAreas([]));
  }, [backend_api]);

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const applyFilters = () => {
    axios
      .get(`${backend_api}/api/v1/matches/`, {
        params: {
          competition: filters.competition,
          area_id: filters.area,
        },
      })
      .then((response) => setMatches(response.data))
      .catch(() => setMatches([]));
  };

  return (
    <div>
      <Filters
        areas={areas}
        leagues={leagues}
        competition={filters.competition}
        area={filters.area}
        onFilterChange={handleFilterChange}
        onApplyFilters={applyFilters}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-1">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            teamA={`Team ${match.home_team_id}`}
            teamB={`Team ${match.away_team_id}`}
            league={match.competition}
            date={new Date(match.date).toLocaleString()}
          />
        ))}
      </div>

    </div>
  );
}

export default LandingPage;
