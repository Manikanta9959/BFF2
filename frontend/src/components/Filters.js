import React from "react";

function Filters({ areas, competition, area, onFilterChange, onApplyFilters }) {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold">Filter Matches</h2>
      <select
        name="competition"
        value={competition}
        onChange={(e) => onFilterChange("competition", e.target.value)}
        className="p-2 m-2"
      >
        <option value="">Select Competition</option>
        <option value="League">League</option>
        <option value="Cup">Cup</option>
      </select>
      <select
        name="area"
        value={area}
        onChange={(e) => onFilterChange("area", e.target.value)}
        className="p-2 m-2"
      >
        <option value="">Select Area</option>
        {areas.map((area) => (
          <option key={area.id} value={area.id}>
            {area.city}, {area.country}
          </option>
        ))}
      </select>
      <button
        onClick={onApplyFilters}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default Filters;
