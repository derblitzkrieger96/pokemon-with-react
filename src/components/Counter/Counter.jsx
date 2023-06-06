import { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/Context";
import classes from "./Counter.module.css";

const Counter = () => {
  const [seconds, setSeconds] = useState(20);
  const { state, dispatch } = useContext(StateContext);
  const [almostFinish, setAlmostFinish] = useState(false);

  useEffect(() => {
    // start counter down
    if (state.isPlaying && seconds >= 0 && !state.isPaused) {
      const timer = setInterval(() => {
        setSeconds((prevState) => prevState - 1);
      }, 1000);

      //   show message with red color when the game is finishing
      if (seconds <= 3) {
        setAlmostFinish(true);
      }
      //   remove red color after 0.5 seconds
      setTimeout(() => {
        setAlmostFinish(false);
      }, 500);

      // finish counter when it reaches -1
      if (seconds === 0) {
        clearInterval(timer);
      }
      return () => {
        clearInterval(timer);
      };
    }
  }, [seconds, state.isPlaying, state.isPaused]);

  useEffect(() => {
    if (seconds === 0) {
      dispatch({ type: "GAME_IS_OVER", gameIsOver: true });
      dispatch({ type: "CLEAR_BOARD" });
    }
  }, [seconds]);

  useEffect(() => {
    setSeconds(20);
  }, [state.restartGame]);

  return (
    <div className={almostFinish ? classes.almostFinish : null}>
      {seconds >= 0 ? seconds : 0} seconds
    </div>
  );
};

export default Counter;
