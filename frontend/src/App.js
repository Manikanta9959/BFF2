import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import TeamPage from "./components/TeamPage";
import PlayerPage from "./components/PlayerPage";
import AreaPage from "./components/AreaPage";

function App() {
  const [activeTab, setActiveTab] = useState("matches");

  const pages = {
    matches: <LandingPage />,
    teams: <TeamPage />,
    players: <PlayerPage />,
    areas: <AreaPage />,
  };

  const tabs = [
    { id: "matches", label: "Matches" },
    { id: "teams", label: "Teams" },
    { id: "players", label: "Players" },
    { id: "areas", label: "Areas" },
  ];

  return (
    <div className="App container mx-auto px-4 py-6">
      <h1 className="text-4xl text-center font-bold mb-6">Football Buzz</h1>

      <div className="flex justify-center mb-6">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            className={`px-6 py-2 mx-2 rounded-lg text-lg font-semibold transition-colors duration-200 ${
              activeTab === id ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {pages[activeTab] || <LandingPage />}
    </div>
  );
}

export default App;
