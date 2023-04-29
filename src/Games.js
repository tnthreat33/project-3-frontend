import React from 'react';
import { Link } from 'react-router-dom';
import './Games.css';

function Games({ teams, setTeams }) {
  function deleteGame(id) {
    fetch(`http://localhost:9292/games/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      const updatedTeams = teams.map(team => ({
        ...team,
        games: team.games.filter(game => game.id !== id)
      }));
      setTeams(updatedTeams);
    });
  }

  return (
    <div className="games-container">
      {teams.map((team) => (
        <div key={team.id}>
          <h2 className="team-name">{team.name}</h2>
          <table className="game-table">
            <thead>
            <tr>
                <th className="table-header">Opponent</th>
                <th className="table-header">Date</th>
                <th className="table-header">Location</th>
                <th className="table-header">Team Score</th>
                <th className="table-header">Opponent Score</th>
                <th className="table-header">Update</th>
                <th className="table-header">Delete</th>
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
                      <button>Update</button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => deleteGame(game.id)}>Delete</button>
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
