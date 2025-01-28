// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function TeamsTab() {
//   const [teams, setTeams] = useState([]);
//   const [selectedTeam, setSelectedTeam] = useState(null);
//   const backend_api = process.env.REACT_APP_BACKEND_API;

//   useEffect(() => {
//     axios
//       .get(`${backend_api}/api/v1/teams`)
//       .then((response) => setTeams(response.data))
//       .catch(() => setTeams([]));
//   }, [backend_api]);

//   const handleTeamClick = (team) => {
//     setSelectedTeam(team);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Teams</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {teams.map((team) => (
//           <div
//             key={team.id}
//             onClick={() => handleTeamClick(team)}
//             className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer"
//           >
//             <h3 className="text-lg font-semibold">{team.name}</h3>
//             <p className="text-sm text-gray-600">City: {team.home_city}</p>
//           </div>
//         ))}
//       </div>

//       {selectedTeam && (
//         <div className="mt-6">
//           <h3 className="text-xl font-bold mb-4">
//             Players in {selectedTeam.name}
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {selectedTeam.players.map((player) => (
//               <div
//                 key={player.id}
//                 className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
//               >
//                 <h4 className="font-semibold">{player.name}</h4>
//                 <p className="text-sm text-gray-600">Position: {player.position}</p>
//                 <p className="text-sm text-gray-600">
//                   Goals: {player.goals}, Assists: {player.assists}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TeamsTab;
