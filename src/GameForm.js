import React, { useState } from "react";

function GameForm({ addGame}) {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9292/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        addGame(data);
        setForm({})
      });
  };

  
  return (
    <div className= "form">
      <h2>New Player</h2>
      <form onSubmit={handleSubmit} >
        <input
          onChange={handleChange}
          type="text"
          name="opponent"
          value= {form.opponent || ''}
          placeholder="Opponent name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="date"
          value= {form.date || ''}
          placeholder="Date"
        />
        <input
          onChange={handleChange}
          type="text"
          name="location"
          value= {form.location || ''}
          placeholder="City, State"
        />
        <input
          onChange={handleChange}
          type="text"
          name="team_score"
          value= {form.team_score || ''}
          placeholder="Home Team Score"
        />
         <input
          onChange={handleChange}
          type="text"
          name="opponent_score"
          value= {form.opponent_score || ''}
          placeholder="Away Team Score"
        />
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}

export default GameForm;