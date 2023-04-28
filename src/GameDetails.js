import React from 'react';
import { useParams } from 'react-router-dom';

function GameDetails({ teams }) {
  const { gameId } = useParams();
  const game = teams
    .flatMap((team) => team.games)
    .find((game) => game.id === parseInt(gameId));

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{game.opponent} at {game.date}</h2>
      <p>Location: {game.location}</p>
      <p>Team Score: {game.team_score}</p>
      <p>Opponent Score: {game.opponent_score}</p>
    </div>
  );
}

export default GameDetails;
