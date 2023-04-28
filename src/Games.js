import React from 'react';
import { Link } from 'react-router-dom';



function Games({ teams }) {
  return (
    <div>
      {teams.map((team) => (
        <div key={team.id}>
          <h2>{team.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Opponent</th>
                <th>Date</th>
                <th>Location</th>
                <th>Team Score</th>
                <th>Opponent Score</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {team.games.map((game) => (
                
                <tr key={game.id}>
                  <td>{game.opponent}</td>
                  <td>{game.date}</td>
                  <td>{game.location}</td>
                  <td>{game.team_score}</td>
                  <td>{game.opponent_score}</td>
                  <td>
                  <Link to={`/games/${game.id}`}>
                <button >Details</button>
                </Link>
                  </td>
                </tr>
              
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Games;
