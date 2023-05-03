import React, { useState, useEffect } from 'react';
import { Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Games from './Games'
import GameDetails from './GameDetails'
import Teams from './Teams'
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);

  console.log(teams)
  

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
      .then((newGame) => {
        const updatedTeams = teams.map((team) => {
          if (team.id === newGame.team_id) {
            return {
              ...team,
              games: [...team.games, newGame],
            };
          } else {
            return team;
          }
        } );
        setTeams(updatedTeams);
      });
  };
  const handleCreateTeam = (team) => {
    fetch('http://localhost:9292/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(team),
    })
      .then((r) => r.json())
      .then((newTeam) => {
        setTeams([...teams, newTeam]);
      });
  };
  

  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home teams={teams} onCreateGame ={handleCreateGame} />
        </Route>
        <Route exact path="/games">
          <Games teams = {teams} setTeams = {setTeams}/>
        </Route>
        <Route path="/games/:id">
          <GameDetails teams = {teams} setTeams ={setTeams}/>
        </Route>
        <Route path="/teams">
          <Teams teams = {teams} onCreateTeam={handleCreateTeam} setTeam = {setTeams}/>
        </Route>
      </Switch>
    </div>
      
  );
}

export default App;
