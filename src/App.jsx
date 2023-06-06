import "./App.css";
import { StateProvider } from "./components/context/Context";
import AppWithState from "./components/AppWithState/AppWithState";

function App() {
  const boardObj = {
    tamanho: 10,
    movimientos: 12,
    board: [
      "0000110000",
      "0000000000",
      "0110000000",
      "0001010000",
      "0111111000",
      "0000001000",
      "0001001000",
      "0111001000",
      "0000100000",
      "0000000016",
    ],
  };
  return (
    <div className="card">
      <StateProvider>
        <AppWithState board={boardObj} />
      </StateProvider>
    </div>
  );
}

export default App;
