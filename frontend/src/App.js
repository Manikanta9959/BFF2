import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import TeamPage from "./components/TeamPage";
import PlayerPage from "./components/PlayerPage";

function App() {
  const [activeTab, setActiveTab] = useState("matches");

  return (
    <div className="App container mx-auto px-4 py-6">
      <h1 className="text-4xl text-center font-bold mb-6">Football Buzz</h1>
      <div className="flex justify-center mb-6">
        <button
            className={`px-6 py-2 mr-4 rounded-lg text-lg font-semibold ${
              activeTab === "matches" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("matches")}
          >
            Matches
        </button>
        <button
          className={`px-6 py-2 mr-4 rounded-lg text-lg font-semibold ${
            activeTab === "teams" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("teams")}
        >
          Teams
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-lg font-semibold ${
            activeTab === "players" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("players")}
        >
          Players
        </button>
      </div>
      {activeTab === "teams" ? <TeamPage /> : activeTab === "players"? <PlayerPage/> : <LandingPage />}
    </div>
  );
}

export default App;
