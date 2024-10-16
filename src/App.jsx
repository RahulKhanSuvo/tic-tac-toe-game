import Board from "./Board";

function App() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center min-h-screen  ">
        <div className="artboard bg-gradient-to-b from-blue-400 to-blue-600 phone-2 border rounded-xl flex justify-center items-center">
          <Board></Board>
        </div>
      </div>
    </>
  );
}

export default App;
