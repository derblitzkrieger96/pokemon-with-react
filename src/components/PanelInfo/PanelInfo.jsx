import { useContext } from "react";
import Counter from "../Counter/Counter";
import classes from "./PanelInfo.module.css";
import { StateContext } from "../context/Context";
const Score = (props) => {
  return (
    <div>
      <span className={classes.score}>score: {props.score}</span>
    </div>
  );
};

const PanelInfo = () => {
  const { state } = useContext(StateContext);
  return (
    <div className={classes.panel}>
      <Counter />
      <Score score={state.score} />
    </div>
  );
};

export default PanelInfo;
