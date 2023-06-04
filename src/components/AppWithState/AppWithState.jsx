import { useContext, useEffect, useState } from "react";
import Board from "../Board/Board";
import PanelInfo from "../PanelInfo/PanelInfo";
import { StateContext } from "../context/Context";
import Modal from "../Modal/Modal";
import GameOver from "../GameOver/GameOver";
import PanelOptions from "../PanelOptions/PanelOptions";

const AppWithState = (props) => {
  const { state } = useContext(StateContext);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const hideModalHandler = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    if (!state.gameIsOver) {
      setModalIsOpen(true);
    }
  }, [state.gameIsOver]);

  return (
    <>
      <>
        {state.gameIsOver && modalIsOpen ? (
          <Modal onClose={hideModalHandler}>
            <GameOver />
            <PanelOptions />
          </Modal>
        ) : null}
        <PanelInfo />
        <Board board={props.board} gameIsOver={state.gameIsOver} />
        <PanelOptions />
      </>
    </>
  );
};

export default AppWithState;
