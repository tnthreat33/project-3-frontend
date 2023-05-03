import React from 'react';
import './Team.css';
import TeamForm from './TeamForm';

function Teams({teams, onCreateTeam, setTeam}){

  const handleDeleteTeam = (id) => {
    fetch(`http://localhost:9292/teams/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      const updatedTeam = teams.filter(team => team.id !== id);
      setTeam(updatedTeam);    })
   
  }

  return (
    <div>
      <h1> All Teams </h1>
    <div className="teams">
      {teams.length > 0 &&
        teams.map((team) => (
          <div key={team.id} className="card">
            <h4>
              {team.name} 
            </h4>
            <p>Location: {team.city}, {team.state}</p>
            <button onClick={() => handleDeleteTeam(team.id)}>Delete</button>
          </div>
          
        ))
        
      }
      
      <TeamForm teams = {teams} onCreateTeam = {onCreateTeam}/>
    </div>
    </div>
  );
}


export default Teams;
