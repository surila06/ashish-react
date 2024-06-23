import Board from "./board";
import { useState } from 'react';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // const [xIsNext, setXIsNext] = useState(true); // by default X will be first
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;


  function handlePlay(nextSquares) {
    console.log("handlePlay", nextSquares);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    // setHistory([...history, nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }


  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <Board xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay} />
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
export default Game;