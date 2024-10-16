const GameBtn = ({ value, btnOnclick, borderClass }) => {
  return (
    <div>
      <button
        onClick={btnOnclick}
        className={`h-20 w-20 bg text-2xl flex items-center justify-center border-gray-400 ${borderClass}`}
      >
        {value}
      </button>
    </div>
  );
};

export default GameBtn;
