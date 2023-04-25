import React from 'react';


function Lineup({ lineup, removePlayer }) {
  
  return (
    <div className="Lineup">
      <h2>Current Lineup</h2>
      {lineup.length > 0 ? (
        lineup.map((player) => (
          <div key={player.id}>
            <h4>
            #{player.jersey} {player.name} 
            </h4>
            <button onClick={() => removePlayer(player.id)}>x</button>
          </div>
        ))
      ) : (
        <p>No players in lineup</p>
      )}
    </div>
  );
}

export default Lineup;