import GameBtn from "./GameBtn";

const Board = () => {
  return (
    <div>
      <div className="artboard bg-gradient-to-b from-blue-400 to-blue-600 phone-2 border rounded-xl flex justify-center items-center">
        <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-md">
          <GameBtn borderClass="border-b border-r"></GameBtn>
          <GameBtn borderClass="border-b border-r"></GameBtn>
          <GameBtn borderClass="border-b"></GameBtn>

          <GameBtn borderClass="border-b border-r"></GameBtn>
          <GameBtn borderClass="border-b border-r"></GameBtn>
          <GameBtn borderClass="border-b"></GameBtn>

          <GameBtn borderClass="border-r"></GameBtn>
          <GameBtn borderClass="border-r"></GameBtn>
          <GameBtn></GameBtn>
        </div>
      </div>
    </div>
  );
};

export default Board;
