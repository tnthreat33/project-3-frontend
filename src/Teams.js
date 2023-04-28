import React from 'react';

function Teams({teams}){

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/teams/${id}`, {
      method: 'DELETE'
    })
      .then((r) => r.json())
      .then((data) => console.log(data))
  }

  return (
    teams.length > 0 &&
    teams.map((team) => (
      <div key={team.id} className="card">
        <h4>
          {team.name} 
        </h4>
        <p>Location: {team.city}, {team.state}</p>
        <button onClick={() => handleDelete(team.id)}>Delete</button>
      </div>
    ))
  );
}

export default Teams;