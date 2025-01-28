// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function MatchesTab() {
//   const [matches, setMatches] = useState([]);
//   const [filters, setFilters] = useState({ competition: "", area: "" });
//   const [selectedMatch, setSelectedMatch] = useState(null);
//   const backend_api = process.env.REACT_APP_BACKEND_API;

//   useEffect(() => {
//     axios
//       .get(`${backend_api}/api/v1/matches`)
//       .then((response) => setMatches(response.data))
//       .catch(() => setMatches([]));
//   }, [backend_api]);

//   const handleFilterChange = (filterName, value) => {
//     setFilters({ ...filters, [filterName]: value });
//   };

//   const applyFilters = () => {
//     axios
//       .get(`${backend_api}/api/v1/matches`, {
//         params: {
//           competition: filters.competition,
//           area_id: filters.area,
//         },
//       })
//       .then((response) => setMatches(response.data))
//       .catch(() => setMatches([]));
//   };

//   const handleMatchClick = (match) => {
//     setSelectedMatch(match);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Matches</h2>
//       <div className="p-4 bg-white rounded-lg shadow-md mb-6">
//         <div className="mb-4">
//           <label className="block text-sm font-medium">Competition</label>
//           <select
//             value={filters.competition}
//             onChange={(e) => handleFilterChange("competition", e.target.value)}
//             className="mt-2 p-2 w-full border rounded-lg"
//           >
//             <option value="">All Competitions</option>
//             {/* Dynamically populate competitions */}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Area</label>
//           <select
//             value={filters.area}
//             onChange={(e) => handleFilterChange("area", e.target.value)}
//             className="mt-2 p-2 w-full border rounded-lg"
//           >
//             <option value="">All Areas</option>
//             {/* Dynamically populate areas */}
//           </select>
//         </div>
//         <button
//           onClick={applyFilters}
//           className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//         >
//           Apply Filters
//         </button>
//       </div>

//       {selectedMatch ? (
//         <div className="p-4 bg-white rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">
//             {selectedMatch.teamA} vs {selectedMatch.teamB}
//           </h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h4 className="font-semibold">Team A Players</h4>
//               <ul>
//                 {selectedMatch.teamAPlayers.map((player) => (
//                   <li key={player.id} className="text-sm">
//                     {player.name} - {player.position}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold">Team B Players</h4>
//               <ul>
//                 {selectedMatch.teamBPlayers.map((player) => (
//                   <li key={player.id} className="text-sm">
//                     {player.name} - {player.position}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {matches.map((match) => (
//             <div
//               key={match.id}
//               onClick={() => handleMatchClick(match)}
//               className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer"
//             >
//               <h3 className="font-semibold">
//                 {match.teamA} vs {match.teamB}
//               </h3>
//               <p className="text-sm text-gray-600">{match.date}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default MatchesTab;
