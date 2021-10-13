import Player from './player.js';
import React, { useState, useEffect } from 'react';
import Positions from './positions.js';

const PlayerController = () =>{
  const [players, setPlayers] = useState([0, 0]);
  const [targetReached, setTargetReached] = useState(false);
  // const [playerPositions, setPlayerPostions] = useState([]);

  useEffect( ()=>{
    const p = [...players];
    p[0] += 1;
    p[0] = p[0] > Positions.length - 1 ? 0 : p[0];
    // setTimeout(() => {
    //   setPlayers(p);
    // }, 1000);
  }, [players[0]]);

  useEffect(()=>{
    if (targetReached) {
      console.log('made it');
      // setTimeout(() => {
      //   setPlayers(0);
      // }, 1000);
    }
  },[targetReached]);


  return (
    <Player position={players[0]} setTargetReached={setTargetReached}/>
  )
}

export default PlayerController;