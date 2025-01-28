import React, { useState, useEffect } from "react";
import Matches from "./Matches";
import Filters from "./Filters";

function LandingPage() {
  const [matches, setMatches] = useState([]);
  const [areas, setAreas] = useState([]);
  const [filters, setFilters] = useState({ competition: "", area: "" });

  useEffect(() => {
    fetch("http://localhost:8000/matches")
      .then((response) => response.json())
      .then((data) => setMatches(data))
      .catch(()=> setMatches([]));

    fetch("http://localhost:8000/areas")
      .then((response) => response.json())
      .then((data) => setAreas(data))
      .catch(()=> setAreas([]));
;
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const applyFilters = () => {
    fetch(
      `http://localhost:8000/matches?competition=${filters.competition}&area_id=${filters.area}`
    )
      .then((response) => response.json())
      .then((data) => setMatches(data))
      .catch(()=> setMatches([]));
  };

  return (
    <div>
      <Filters
        areas={areas}
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
