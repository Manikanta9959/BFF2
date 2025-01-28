import React, { useState, useEffect } from "react";
import axios from "axios";
import Matches from "./Matches";
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
      .get(`${backend_api}/api/v1/matches`)
      .then((response) => setMatches(response.data))
      .catch(() => setMatches([]));

    axios
      .get(`${backend_api}/api/v1/matches/leagues`)
      .then((response) => setLeagues(response.data))
      .catch(() => setLeagues([]));

    axios
      .get(`${backend_api}/api/v1/areas`)
      .then((response) => setAreas(response.data))
      .catch(() => setAreas([]));
  }, [backend_api]);

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const applyFilters = () => {
    axios
      .get(`${backend_api}/api/v1/matches`, {
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
      <Matches matches={matches} />
    </div>
  );
}

export default LandingPage;
