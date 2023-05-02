
import React, { useState } from 'react';


function TeamForm({ teams, onCreateTeam }) {
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const  new_team= {
      name,
      city,
      state,
      
    };
    onCreateTeam(new_team);
    setCity('');
    setState('');
  };

  return (
    <form className="team-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Team Name: 
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
      </div>
      <div className="form-group"> 
        <label>
          City :
          <input type="date" value={city} onChange={(event) => setCity(event.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          State:
          <input type="text" value={state} onChange={(event) => setState(event.target.value)} />
        </label>
      </div>
      <button type="submit">Create Team</button>
    </form>
  );
}


export default TeamForm;
