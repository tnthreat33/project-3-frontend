import React from 'react';
import { Link } from 'react-router-dom';

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
                <th>Update</th>
                <th>Delete</th>
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
