import React, { useState, useEffect } from "react";
import axios from "axios";
import AreaCard from "../reusable_components/AreaCard";

function AreaPage() {
  const [areas, setArea] = useState([]);
  const backend_api = process.env.REACT_APP_BACKEND_API;

  useEffect(() => {
    axios
      .get(`${backend_api}/api/v1/areas/`)
      .then((response) => {
        setArea(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching area data:", error);
        setArea([]);
      });
  }, [backend_api]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-1">
      {areas.map((area) => (
        <AreaCard
          key={area.id}
          city={`${area.city}`}
          country={area.country}
          teams_list={area.teams_list}  
        />
      ))}
    </div>
  );
}

export default AreaPage;
