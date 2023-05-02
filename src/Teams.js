import React from 'react';
import './Team.css';
import TeamForm from './TeamForm';

function Teams({teams}){

  return (
    <div className="teams">
      {teams.length > 0 &&
        teams.map((team) => (
          <div key={team.id} className="card">
            <h4>
              {team.name} 
            </h4>
            <p>Location: {team.city}, {team.state}</p>
          </div>
        ))
      }
      <h1> Add New Team</h1>
      <TeamForm teams = {teams} onCreateTeam = {onCreateTeam}/>
    </div>
  );
}

export default Teams;
