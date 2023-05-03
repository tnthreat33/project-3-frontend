import React, { useState } from 'react';
import './TeamForm.css'

function TeamForm({ teams, onCreateTeam }) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTeam = {
      name,
      city,
      state,
    };

    onCreateTeam(newTeam);

    setName('');
    setCity('');
    setState('');
  };

  return (
    <>
    <h1> Add New Team</h1>
    <form className="team-form" onSubmit={handleSubmit}>
      <div >
        <label>
          Team Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
      </div>
      <div >
        <label>
          City:
          <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
        </label>
      </div>
      <div >
        <label>
          State:
          <input type="text" value={state} onChange={(event) => setState(event.target.value)} />
        </label>
      </div>
      <button type="submit">Create Team</button>
    </form>
    </>
  );
}

export default TeamForm;
