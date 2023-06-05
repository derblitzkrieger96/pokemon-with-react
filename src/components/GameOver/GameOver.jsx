import { useContext } from "react";
import classes from "./GameOver.module.css";
import { StateContext } from "../context/Context";
const paths = {
  7: "./../../../images/charmander.png",
  8: "./../../../images/pikachu.png",
  9: "./../../../images/squirtle.png",
};

const GameOver = () => {
  const { state } = useContext(StateContext);
  const capturedPokemons = Object.entries(state.captured).map((entry, i) => {
    return (
      <div className={classes.pokemonQuantity} key={i}>
        <img src={paths[entry[0]]} className={classes.image} />
        <span>x</span>
        <span>{entry[1]}</span>
      </div>
    );
  });
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h2>Game Over</h2>
      </div>
      <div className={classes.bodyContainer}>
        <h3>Summary</h3>
        <div className={classes.summaryContainer}>{capturedPokemons}</div>
      </div>
    </div>
  );
};

export default GameOver;
