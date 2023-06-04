import { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/Context";
import classes from "./Counter.module.css";

let counter = 0;
const Counter = () => {
  const [seconds, setSeconds] = useState(10);
  const { state, dispatch } = useContext(StateContext);
  const [almostFinish, setAlmostFinish] = useState(false);

  useEffect(() => {
    if (seconds >= -1) {
      const timer = setInterval(() => {
        setSeconds((prevState) => prevState - 1);
      }, 1000);

      if (seconds <= 3) {
        console.log("almost FInish");
        setAlmostFinish(true);
      }

      setTimeout(() => {
        setAlmostFinish(false);
      }, 500);

      if (seconds === -1) {
        clearInterval(timer);
      }
      return () => {
        clearInterval(timer);
      };
    }
  }, [seconds]);

  useEffect(() => {
    if (seconds === -1) {
      dispatch({ type: "GAME_IS_OVER", gameIsOver: true });
      //   alert("Time's up!");
    }
  }, [seconds]);

  useEffect(() => {
    setSeconds(10);
  }, [state.restartGame]);

  return (
    <div className={almostFinish ? classes.almostFinish : null}>
      {seconds >= 0 ? seconds : 0} seconds
    </div>
  );
};

export default Counter;
