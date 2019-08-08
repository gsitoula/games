import React from 'react';
import DiceRoller from './components/DiceRoll';
import DestinyPool from './components/DestinyPool';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css';

function App() {
  let destinyRoll = DiceRoller(6, 5);
  //console.log(destinyRoll);
  return (
    <div className="App">
      {/* <DestinyPool available={destinyRoll.available} spent={destinyRoll.spent}></DestinyPool> */}
      <GameBoard></GameBoard>
    </div>
  );
}

export default App;
