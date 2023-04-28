import React, { useState } from 'react';

function GameForm({ teams, onCreateGame }) {
  const [opponent, setOpponent] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [teamScore, setTeamScore] = useState('');
  const [opponentScore, setOpponentScore] = useState('');
  const [teamId, setTeamId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const game = {
      opponent,
      date,
      location,
      team_score: teamScore,
      opponent_score: opponentScore,
      team_id: teamId
    };
    onCreateGame(game);
    setOpponent('');
    setDate('');
    setLocation('');
    setTeamScore('');
    setOpponentScore('');
    setTeamId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Opponent:
          <input type="text" value={opponent} onChange={(event) => setOpponent(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Location:
          <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Team Score:
          <input type="number" value={teamScore} onChange={(event) => setTeamScore(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Opponent Score:
          <input type="number" value={opponentScore} onChange={(event) => setOpponentScore(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Team:
          <select value={teamId} onChange={(event) => setTeamId(event.target.value)}>
            <option value="">Select a team</option>
            {teams.length > 1 && teams.map((team) => (
  <option key={team.id} value={team.id}>
    {team.name}
  </option>
))}

          </select>
        </label>
      </div>
      <button type="submit">Create Game</button>
    </form>
  );
}

export default GameForm;
