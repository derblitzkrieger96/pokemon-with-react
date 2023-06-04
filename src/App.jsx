import { useContext } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import PanelInfo from "./components/PanelInfo/PanelInfo";
import { StateContext, StateProvider } from "./components/context/Context";
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
    <StateProvider>
      <AppWithState board={boardObj} />
    </StateProvider>
  );
}

export default App;
