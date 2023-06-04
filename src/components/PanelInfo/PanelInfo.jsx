import { useContext, useState, useEffect } from "react";
import Counter from "../Counter/Counter";
import classes from "./PanelInfo.module.css";
import { StateContext } from "../context/Context";
const Score = (props) => {
  return (
    <div>
      <span
        className={
          classes.score + " " + (props.isUpdating ? classes.isUpdating : null)
        }
      >
        score: {props.score}
      </span>
    </div>
  );
};

let counter = 0;
const PanelInfo = () => {
  const { state } = useContext(StateContext);
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    if (counter > 1) {
      setIsUpdating(true);
    }
    counter++;
    setTimeout(() => {
      setIsUpdating(false);
    }, 500);
  }, [state.capturedPokemons]);
  return (
    <div className={classes.panel}>
      <Counter />
      <Score score={state.score} isUpdating={isUpdating} />
    </div>
  );
};

export default PanelInfo;
