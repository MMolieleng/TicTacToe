import Board from "./Board";
import { useState } from "react";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  /**
   [X][ ][ ]
   [ ][X][ ]
   [ ][ ][x]
   */

  function calculateIsWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return false;
  }

  function handleClick(selectedIndex) {
    if (squares[selectedIndex] !== null) return;

    let squareCopy = squares;
    squareCopy[selectedIndex] = currentPlayer;
    setSquares(squareCopy);

    const haveAWinner = calculateIsWinner();

    if (currentPlayer === "X") {
      setCurrentPlayer("Y");
    } else {
      setCurrentPlayer("X");
    }
  }
  return (
    <div>
      <h3>Current Player : {currentPlayer}</h3>
      <Board squares={squares} onclick={handleClick} />
    </div>
  );
}
