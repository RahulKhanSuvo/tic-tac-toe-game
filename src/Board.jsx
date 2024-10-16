import { useState } from "react";
import GameBtn from "./GameBtn";

const Board = () => {
  const [isNextOBtn, setIsNextOBtn] = useState(true);
  const [gameButtonsV, setGameButtonsV] = useState(Array(9).fill(null));
  console.log(gameButtonsV);
  // *handelClick
  const handelClick = (index) => {
    const newGameBtnValue = gameButtonsV.slice();
    if (newGameBtnValue[index]) {
      return;
    }
    if (isNextOBtn) {
      newGameBtnValue[index] = "X";
    } else {
      newGameBtnValue[index] = "0";
    }

    setGameButtonsV(newGameBtnValue);
    setIsNextOBtn(!isNextOBtn);
  };
  return (
    <div>
      <div className="artboard bg-gradient-to-b from-blue-400 to-blue-600 phone-2 border rounded-xl flex justify-center items-center">
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
