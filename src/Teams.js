import React from 'react';

function Teams({teams}){
    return (
        teams.length > 0 &&
    teams.map((team) => (
      <div key={team.id} className="card">
        <h4>
          {team.name} 
        </h4>
        <p>Location: {team.city}, {team.state}</p>
        
        </div>
    )))
}

export default Teams;