import { useContext } from "react";
import classes from "./PanelOptions.module.css";
import { StateContext } from "../context/Context";
const PanelOptions = () => {
  const { state, dispatch } = useContext(StateContext);
  const restartGameHandler = () => {
    dispatch({
      type: "RESTART_GAME",
      newStateObj: {
        capturedPokemons: 0,
        score: 0,
        gameIsOver: false,
        isPlaying: true,
        isPaused: false,
        captured: {},
      },
    });
    dispatch({ type: "UPDATE_PLAYER_POSITION", i: 9, j: 9 });
  };

  const playGameHandler = () => {
    dispatch({ type: "PLAY_GAME" });
    dispatch({
      type: "RESTART_GAME",
      newStateObj: {
        capturedPokemons: 0,
        score: 0,
        gameIsOver: false,
        captured: {},
      },
    });
  };

  const pauseGameHandler = () => {
    dispatch({ type: "PAUSE_GAME", pauseGame: !state.isPaused });
  };

  return (
    <div className={classes.panelOptions}>
      {!state.isPlaying && (
        <button className={classes.button} onClick={playGameHandler}>
          Play
        </button>
      )}

      {state.isPlaying && (
        <button className={classes.button} onClick={pauseGameHandler}>
          {state.isPaused ? "Resume" : "Pause"}
        </button>
      )}
      {state.isPlaying && (
        <button className={classes.button} onClick={restartGameHandler}>
          Restart
        </button>
      )}
    </div>
  );
};

export default PanelOptions;
