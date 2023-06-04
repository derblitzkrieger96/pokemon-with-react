import classes from "./GameOver.module.css";

const GameOver = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h2>Game Over</h2>
      </div>
      <div className={classes.bodyContainer}>
        <h3>Summary</h3>
        <div className={classes.pokemonQuantity}>
          <span>Pikachu</span>
          <span>3</span>
        </div>
        <div className={classes.pokemonQuantity}>
          <span>Squirtle</span>
          <span>2</span>
        </div>
        <div className={classes.pokemonQuantity}>
          <span>Charizard</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
