import React from "react";


function Roster({ players, handleRemovePlayer, handleAddToLineup }) {
  function handleDeleteClick(player) {
    fetch(`http://localhost:3000/players/${player.id}`, {
      method: 'DELETE',
    });
    handleRemovePlayer(player.id);
  }

  function handleAddClick(player) {
    handleAddToLineup(player);
  }

  return (
    players.length > 0 &&
    players.map((player) => (
      <div key={player.id} className="card">
        <h4>
          {player.name} #{player.jersey}
        </h4>
        <p>Position: {player.position}</p>
        <p>Class: {player.class}</p>
        <button onClick={() => handleDeleteClick(player)}>Remove From Roster</button>
        <button onClick={() => handleAddClick(player)}>Add to Lineup</button>
      </div>
    ))
  );
}

export default Roster;