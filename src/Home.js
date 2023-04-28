
import React from 'react';
import GameForm from './GameForm';


function Home({onCreateGame, teams }) {
  return (
    <div>
      <h1>Welcome to the Game App!</h1>
      <GameForm onCreateGame ={onCreateGame} teams={teams}/>
    </div>
  );
}

export default Home;