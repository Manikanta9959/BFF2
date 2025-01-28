import React from "react";

function Matches({ matches }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Upcoming Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id} className="my-2 p-2 border">
            <p>
              {match.home_team_id} vs {match.away_team_id} ({match.competition}) on{" "}
              {match.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Matches;
