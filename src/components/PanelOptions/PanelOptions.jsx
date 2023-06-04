import { useContext } from "react";
import classes from "./PanelOptions.module.css";
import { StateContext } from "../context/Context";
const PanelOptions = () => {
  const { dispatch } = useContext(StateContext);
  const restartGameHandler = () => {
    dispatch({
      type: "RESTART_GAME",
      newStateObj: {
        capturedPokemons: 0,
        score: 0,
        gameIsOver: false,
      },
    });
    dispatch({ type: "UPDATE_PLAYER_POSITION", i: 9, j: 9 });
  };
  return (
    <div className={classes.panelOptions}>
      <button className={classes.button} onClick={restartGameHandler}>
        Restart game
      </button>
    </div>
  );
};

export default PanelOptions;
