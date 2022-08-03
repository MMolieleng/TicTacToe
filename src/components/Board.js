import Square from "./Square";

export default function Board({ squares, onclick }) {
  return (
    <div>
      {squares.map((square, index) => {
        return <Square onclick={onclick} value={index} />;
      })}
    </div>
  );
}
