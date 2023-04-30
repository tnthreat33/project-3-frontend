import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './GameDetails.css';

function GameDetails({ teams, setTeams }) {
  const { id } = useParams();
  const history = useHistory();

  const selectedTeam = teams.find(team => team.games.some(game => game.id === parseInt(id)));
  const selectedGame = selectedTeam.games.find(game => game.id === parseInt(id));
  
  const [game, setGame] = useState(selectedGame);



  function handleInputChange(event) {
    const { name, value } = event.target;
    setGame(game => ({
      ...game,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:9292/games/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(game)
    })
    .then(response => response.json())
    .then(data => {
      setGame(data);
      const updatedTeams = teams.map(team => {
        if (team.id === selectedTeam.id) {
          const updatedGames = team.games.map(game => {
            if (game.id === selectedGame.id) {
              return data;
            }
            return game;
          });
          return { ...team, games: updatedGames };
        }
        return team;
      });
      setTeams(updatedTeams);
    });
    history.push('/games');
  }

  return (
    <div className="game-detail-container">
      <h2>Update Game</h2>
      <form onSubmit={handleSubmit} className="game-form">
        <label>
          Opponent:
          <input type="text" name="opponent" value={game.opponent} onChange={handleInputChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={game.date} onChange={handleInputChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={game.location} onChange={handleInputChange} />
        </label>
        <label>
          Team Score:
          <input type="number" name="team_score" value={game.team_score} onChange={handleInputChange} />
        </label>
        <label>
          Opponent Score:
          <input type="number" name="opponent_score" value={game.opponent_score} onChange={handleInputChange} />
        </label>
        <div className="buttons-container">
          <button type="submit" >Submit</button>
          <button type="button" onClick={() => history.push('/games')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default GameDetails
