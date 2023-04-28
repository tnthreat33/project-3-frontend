import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Games from './Games'
import GameDetails from './GameDetails'
import Teams from './Teams'
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:9292/teams')
      .then((r) => r.json())
      .then((data) => setTeams(data));
  }, []);
 
  const handleCreateGame = (game) => {
    fetch('http://localhost:9292/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };
  

  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home teams={teams} onCreateGame ={handleCreateGame}/>
        </Route>
        <Route exact path="/games">
          <Games teams = {teams}/>
        </Route>
        <Route path="/games/:gameId">
          <GameDetails teams = {teams}/>
        </Route>
        <Route path="/teams">
          <Teams teams = {teams}/>
        </Route>
      </Switch>
    </div>
      
  );
}

export default App;
