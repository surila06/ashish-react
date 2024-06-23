import Square from './square'

function Board({ xIsNext, square, onPlay }) {

  // const [square, setSquare] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true); // by default X will be first

  function handleSquareClick(i) {
    console.log("handleSquareClick", i);
    if (square[i] != null || calculateWinner(square)) {
      console.log('do nothing remain unchanged')
      return;
    }
    // setSquare('x');
    const nextSquare = square.slice();


    if (xIsNext) {
      nextSquare[i] = "X";

    } else {
      nextSquare[i] = "O";
    }

    onPlay(nextSquare);

  }

  function calculateWinner(squares) {
    // winner combination
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],

    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="board">
      <h4>Status {status} </h4>
      <div className="container">
        <Square value={square[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleSquareClick(2)} />

      </div>
      <div className="container">
        <Square value={square[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleSquareClick(5)} />

      </div>
      <div className="container">
        <Square value={square[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleSquareClick(8)} />

      </div>
    </div>
  );
}

export default Board;
