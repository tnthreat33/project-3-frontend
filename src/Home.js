import React from 'react'
import PlayerForm from './PlayerForm';

function Home({addPlayer}) {
 
  return (
    <div className= "home">
      <h1>
        Center Grove Softball
      </h1>
     <PlayerForm addPlayer = {addPlayer} />
      
    </div>
  );
}

export default Home;