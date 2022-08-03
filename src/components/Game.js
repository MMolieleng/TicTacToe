import Board from "./Board";
import { useState } from "react";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill("X"));

  function handleClick(squareIndex) {
    console.log(squareIndex);
  }
  return (
    <div>
      <Board squares={squares} onclick={handleClick} />
    </div>
  );
}
