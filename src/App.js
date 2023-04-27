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
  console.log(teams)

  

  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/games">
          <Games />
        </Route>
        <Route path="/games/:gameId">
          <GameDetails />
        </Route>
        <Route path="/teams">
          <Teams teams = {teams}/>
        </Route>
      </Switch>
    </div>
      
  );
}

export default App;
