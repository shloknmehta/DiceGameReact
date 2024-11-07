import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import DiceImage1 from "C:/Users/snmeh/OneDrive/Desktop/project ssrp/ReactDiceRoller-main/src/dice1.jpeg";
import DiceImage2 from "C:/Users/snmeh/OneDrive/Desktop/project ssrp/ReactDiceRoller-main/src/dice2.jpeg";
import DiceImage3 from "C:/Users/snmeh/OneDrive/Desktop/project ssrp/ReactDiceRoller-main/src/dice3.png";
import DiceImage4 from "C:/Users/snmeh/OneDrive/Desktop/project ssrp/ReactDiceRoller-main/src/dice4.jpeg";
import DiceImage5 from "C:/Users/snmeh/OneDrive/Desktop/project ssrp/ReactDiceRoller-main/src/dice5.jpeg";
import DiceImage6 from "C:/Users/snmeh/OneDrive/Desktop/project ssrp/ReactDiceRoller-main/src/dice6.jpeg";

function App() 
{
  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]

  const [image, setNewImage] = useState(diceImages[0])
  const [image2, setNewImage2] = useState(diceImages[1])

  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
  }


  return (
    <div className="App">
      <center>
        <h1>Welcome to ULTIMATE DICE ROLLER</h1>
        <div className='container'>
          <img className='square' src={image}></img>
          <div style={{width: '5px', display: 'inline-block'}}></div>
          <img className='square' src={image2}></img>
        </div>
        <button type="button" class="btn btn-outline-primary" onClick={rollDice}>Roll Dice</button>
      </center>
    </div>
  );
}

export default App;
