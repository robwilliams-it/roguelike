// this will be the container that hosts the rest of the board and game logic
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Card';
import React, { useState } from 'react';
import Board from './components/board/board.js';
import PlayerController from './components/player/playerController.js';

function App() {
  let y = window.screen.height
  // console.log(y);
  const [spaces, setSpaces] = useState([]);

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
      <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
      >
      </Grid>

      <Paper
        id="******"
        elevation={3}
        // id="app"
        // container
        // direction="row"
        // justifyContent="center"
        // alignItems="center"
        style={{
          boxSizing: "border-box",
        }}
      >
        <PlayerController />
        <Board count={50} setSpaces={setSpaces} spaces={spaces}/>
      </Paper>
    </Grid>
  );
}

export default App;
