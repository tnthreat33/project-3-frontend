import React from 'react'
import GameForm from './GameForm';

function Home({addGames}) {
 
  return (
    <div className= "home">
      <h1>
        Center Grove Softball
      </h1>
     <GameForm addGame = {addGames} />
      
    </div>
  );
}

export default Home;