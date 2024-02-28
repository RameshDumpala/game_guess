import React, { useState } from "react";
import "./Game.css";

let randomNumber = Math.round(Math.random() * 1000);

const Game = () => {
  console.log(randomNumber);

  const [userGuess, setUserGuess] = useState("");
  const [count, setCount] = useState(3);

  const handleChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleguess = () => {
    if (userGuess === "") return null;

     if (parseInt(userGuess) < randomNumber) {
      return setCount(count - 1);
    }

    else if (userGuess === randomNumber) {
      return <p className="alert alert-success">Correct!</p>;
    }

  };

  // function compareArrays(arr1, arr2) {
  //   if (userGuess === "") return null;
  //   else {
  //     for ( i = 0; i < arr1.length; i++) {
  //       if (arr1[i] != arr2[i]) {
  //         return false;
  //       }
  //       return true;
  //     }
  //   }
  // }

  // if (compareArrays(randomNumber, [...userGuess])) {
  //   console.log("equual");
  // } else {
  //   console.log("not equual");
  // }

  return (
    <div className="game_container">
      <h3 className="header">Guess The Number game</h3>
      <span className="chances">You have {count} chances</span>
      <p>Guess a number between 1 and 1000</p>
      <input
        type="number"
        className="number_input"
        placeholder="****"
        onChange={handleChange}
      />
      <button className="btn_guess" onClick={handleguess}>
        GUESS
      </button>
    </div>
  );
};

export default Game;
