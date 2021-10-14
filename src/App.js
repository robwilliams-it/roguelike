// this will be the container that hosts the rest of the board and game logic
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Card';
import React, { useState } from 'react';
import Board from './components/board/board.js';
import PlayerController from './components/player/playerController.js';
import DiceController from './components/dice/diceController.js';

function App() {
  let y = window.screen.height
  // console.log(y);
  const [spaces, setSpaces] = useState([]);
  const [playerActive, setPlayerActive] = useState(false);
  const [count, setCount] = useState(0);


  return (
    // prior to rendering the board create a grid for each space to sit in
    <Grid
      id="outer"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        height: `${y}px`,
      }}
    >
      {/* <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
      >
      </Grid> */}

      <Paper
        id="******"
        elevation={3}
        style={{
          boxSizing: "border-box",
        }}
      >
        <PlayerController playerActive={playerActive} setPlayerActive={setPlayerActive} count={count}/>
        <DiceController playerActive={playerActive} setPlayerActive={setPlayerActive} setCount={setCount}/>
        <Board count={50} setSpaces={setSpaces} spaces={spaces}/>
      </Paper>
    </Grid>
  );
}

export default App;
