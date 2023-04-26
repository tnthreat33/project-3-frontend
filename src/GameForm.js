import React, { useState } from "react";

function GameForm({ addGame }) {
  const [form, setForm] = useState({
    opponent: "",
    date: "",
    location: "",
    team_score: "",
    opponent_score: "",
  });

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
        setForm({
          opponent: "",
          date: "",
          location: "",
          team_score: "",
          opponent_score: "",
        });
      });
  };

  return (
    <div className="form">
      <h2>New Game</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="opponent">Opponent name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="opponent"
          value={form.opponent}
          placeholder="Opponent name"
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          onChange={handleChange}
          type="text"
          name="date"
          value={form.date}
          placeholder="Date"
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          onChange={handleChange}
          type="text"
          name="location"
          value={form.location}
          placeholder="City, State"
          required
        />

        <label htmlFor="team_score">Home Team Score:</label>
        <input
          onChange={handleChange}
          type="number"
          name="team_score"
          value={form.team_score}
          placeholder="Home Team Score"
          required
        />

        <label htmlFor="opponent_score">Opponent Score:</label>
        <input
          onChange={handleChange}
          type="number"
          name="opponent_score"
          value={form.opponent_score}
          placeholder="Opponent Score"
          required
        />

        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}

export default GameForm;
