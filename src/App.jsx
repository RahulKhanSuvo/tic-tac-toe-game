import Board from "./Board";

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#5BC7B0] to-[#51B3E2] min-h-screen">
      <div className="bg-gradient-to-b from-blue-400 to-blue-600 artboard phone-2 border-[8px] shadow-lg rounded-3xl flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-xs md:max-w-sm lg:max-w-md">
        <Board />
      </div>
    </div>
  );
}

export default App;
