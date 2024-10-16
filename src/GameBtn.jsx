import OImage from "./assets/State=O.png";
import XImage from "./assets/State=X.png";
const GameBtn = ({ value, btnOnclick, borderClass }) => {
  return (
    <div>
      <button
        onClick={btnOnclick}
        className={`h-20 w-20 bg text-2xl flex items-center justify-center border-gray-400 ${borderClass}`}
      >
        {value === "X" ? (
          <img src={XImage} alt="X" />
        ) : (
          value === "O" && <img src={OImage} alt="O" />
        )}
      </button>
    </div>
  );
};

export default GameBtn;
