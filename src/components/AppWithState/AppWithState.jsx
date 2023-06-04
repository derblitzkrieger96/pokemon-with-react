import { useContext } from "react";
import Board from "../Board/Board";
import PanelInfo from "../PanelInfo/PanelInfo";
import { StateContext } from "../context/Context";
const AppWithState = (props) => {
  const { state } = useContext(StateContext);
  return (
    <>
      {/* <div className={`container  ${state.gameIsOver ? "gameOver" : ""}`}> */}
      <div className={`container`}>
        <Board board={props.board} />
        <PanelInfo />
      </div>
    </>
  );
};

export default AppWithState;
