import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function GameDetails({ teams }) {
  const { gameId } = useParams();
  const [game, setGame] = useState(
    teams.flatMap((team) => team.games).find((game) => game.id === parseInt(gameId))
  );
  const [errorMessage, setErrorMessage] = useState(null);

  const handleUpdateGame = () => {
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    })
      .then((response) => response.json())
      .then((data) => {
        setGame(data);
        setErrorMessage(null);
      })
      .catch((error) => {
        setErrorMessage('An error occurred while updating the game.');
        console.error('Error updating game:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGame((prevGame) => ({
      ...prevGame,
      [name]: value,
    }));
  };

  if (!game) {
    return <div> Game Successfully Updated 
    </div>;
  }

  return (
    <div>
      <h2>{game.opponent}</h2>
      <form onSubmit={handleUpdateGame}>
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
          <input
            type="text"
            name="location"
            value={game.location}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Team Score:
          <input
            type="number"
            name="team_score"
            value={game.team_score}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Opponent Score:
          <input
            type="number"
            name="opponent_score"
            value={game.opponent_score}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update Game</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default GameDetails;
