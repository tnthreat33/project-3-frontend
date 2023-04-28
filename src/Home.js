
import React from 'react';
import GameForm from './GameForm';


function Home({onCreateGame, teams }) {
  return (
    <div>
      <h1>Welcome to the Game App!</h1>

      <h3> Add a New Game Below</h3>
      <GameForm onCreateGame ={onCreateGame} teams={teams}/>
    </div>
  );
}

export default Home;