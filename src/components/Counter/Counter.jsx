import { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/Context";

const Counter = () => {
  const [seconds, setSeconds] = useState(10);
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    if (seconds >= -1) {
      const timer = setInterval(() => {
        setSeconds((prevState) => prevState - 1);
      }, 1000);

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
      alert("Time's up!");
    }
  }, [seconds]);

  return <div>{seconds >= 0 ? seconds : 0} seconds</div>;
};

export default Counter;
