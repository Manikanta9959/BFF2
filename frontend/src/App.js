import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TeamPage from "./components/TeamPage";
import PlayerPage from "./components/PlayerPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-4xl text-center my-4">Football Tracker</h1>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team/:id" element={<TeamPage />} />
          <Route path="/player/:id" element={<PlayerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
