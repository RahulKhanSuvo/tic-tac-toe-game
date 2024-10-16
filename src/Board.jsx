import { useState } from "react";
import GameBtn from "./GameBtn";

const Board = () => {
  const [isNextOBtn, setIsNextOBtn] = useState(true);
  const [gameButtonsV, setGameButtonsV] = useState(Array(9).fill(null));
  console.log(gameButtonsV);
  // *handelClick
  const handelClick = (index) => {
    const newGameBtnValue = gameButtonsV.slice();
    if (newGameBtnValue[index] || calculateWinner(gameButtonsV)) {
      return;
    }
    if (isNextOBtn) {
      newGameBtnValue[index] = "X";
    } else {
      newGameBtnValue[index] = "O";
    }
    setGameButtonsV(newGameBtnValue);
    setIsNextOBtn(!isNextOBtn);
  };
  const winner = calculateWinner(gameButtonsV);
  console.log(winner);
  let status;
  if (winner) {
    status = `Winner ${winner}`;
  } else if (!gameButtonsV.includes(null)) {
    status = "Draw!";
  } else {
    status = `Next play: ${isNextOBtn ? "X" : "O"}`;
  }
  // *function for calculateWinner
  function calculateWinner(gameBtn) {
    const winingPossibility = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of winingPossibility) {
      if (
        gameBtn[a] &&
        gameBtn[a] === gameBtn[b] &&
        gameBtn[a] === gameBtn[c]
      ) {
        return gameBtn[a];
      }
    }
    return null;
  }
  return (
    <div>
      <div className="">
        <div
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          className="text-center text-white mb-5 font-bold text-2xl"
        >
          {status}
        </div>
        <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-md">
          <GameBtn
            value={gameButtonsV[0]}
            btnOnclick={() => handelClick(0)}
            borderClass="border-b border-r"
          ></GameBtn>
          <GameBtn
            value={gameButtonsV[1]}
            btnOnclick={() => handelClick(1)}
            borderClass="border-b border-r"
          ></GameBtn>
          <GameBtn
            value={gameButtonsV[2]}
            btnOnclick={() => handelClick(2)}
            borderClass="border-b"
          ></GameBtn>

          <GameBtn
            value={gameButtonsV[3]}
            btnOnclick={() => handelClick(3)}
            borderClass="border-b border-r"
          ></GameBtn>
          <GameBtn
            value={gameButtonsV[4]}
            btnOnclick={() => handelClick(4)}
            borderClass="border-b border-r"
          ></GameBtn>
          <GameBtn
            value={gameButtonsV[5]}
            btnOnclick={() => handelClick(5)}
            borderClass="border-b"
          ></GameBtn>

          <GameBtn
            value={gameButtonsV[6]}
            btnOnclick={() => handelClick(6)}
            borderClass="border-r"
          ></GameBtn>
          <GameBtn
            value={gameButtonsV[7]}
            btnOnclick={() => handelClick(7)}
            borderClass="border-r"
          ></GameBtn>
          <GameBtn
            value={gameButtonsV[8]}
            btnOnclick={() => handelClick(8)}
          ></GameBtn>
        </div>
      </div>
    </div>
  );
};

export default Board;
