const GameBtn = ({ borderClass }) => {
  return (
    <div>
      <button
        className={`h-20 w-20 text-2xl flex items-center justify-center border-gray-400 ${borderClass}`}
      >
        X
      </button>
    </div>
  );
};

export default GameBtn;
