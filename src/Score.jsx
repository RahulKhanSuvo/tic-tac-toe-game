const Score = ({ xWin, oWin, drawCount }) => {
  return (
    <div className="flex mb-8 justify-between text-center">
      <div className="bg-white p-2 rounded-lg">
        <h3 className="text-xl font-semibold">Player X</h3>
        <span className="font-medium">{xWin}</span>
      </div>
      <div className="bg-white p-2 rounded-lg">
        <h3 className="text-xl font-semibold">Draw</h3>
        <span className="font-medium">{drawCount}</span>
      </div>
      <div className="bg-white p-2 rounded-lg">
        <h3 className="text-xl font-semibold">Player O</h3>
        <span className="font-medium">{oWin}</span>
      </div>
    </div>
  );
};

export default Score;
