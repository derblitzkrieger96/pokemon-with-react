import { useContext, useEffect, useMemo } from "react";
import { StateContext } from "../context/Context";
import classes from "./Board.module.css";
import Box from "../Box/Box";
import Modal from "../Modal/Modal";

const Board = (props) => {
  const { state, dispatch } = useContext(StateContext);
  // console.log(algo, "aaaaaaaaaaaaaa");

  //check if box is empty
  const boxIsEmpty = (board_matrix, i, j) => {
    return board_matrix[i][j] === "0";
  };

  // check if box is around the player
  const boxIsAround = (i_current, j_current, i_future, j_future) => {
    i_current = Number(i_current);
    j_current = Number(j_current);
    i_future = Number(i_future);
    j_future = Number(j_future);
    if (
      (i_future === i_current - 1 ||
        i_future === i_current + 1 ||
        i_future === i_current) &&
      (j_future === j_current - 1 ||
        j_future === j_current + 1 ||
        j_future === j_current)
    ) {
      return true;
    }
    return false;
  };

  //verify if box has pokemon
  const boxHasPokemon = (i, j) => {
    console.log(state.board[i][j], "pokemonnnnnn");
    return [7, 8, 9].includes(Number(state.board[i][j]));
  };

  // click handler
  const boxClickHandler = (i, j) => {
    // the box is empty
    if (
      boxIsEmpty(state.board, i, j) &&
      boxIsAround(state.player.i, state.player.j, i, j)
    ) {
      dispatch({ type: "UPDATE_PLAYER_POSITION", i, j });
    }

    //the box contains a pokemon
    if (boxHasPokemon(i, j)) {
      dispatch({ type: "UPDATE_SCORE" });
      dispatch({
        type: "UPDATE_PLAYER_POSITION",
        i,
        j,
      });

      dispatch({ type: "UPDATE_CAPTURED_POKEMONS" });
      console.log("tiene pokemonnnnnn");
    }
    console.log(state.board, "stateeeee after pokemonnnnnn");
  };

  //generate random pokemon and position
  const generateRandomPokemon = () => {
    const randomPokemon = Math.floor(Math.random() * 3) + 7;
    console.log(randomPokemon, "randomPokemon");
    const generateRandomPokemonPosition = () => {
      const randomPokemonI = Math.floor(Math.random() * 10);
      const randomPokemonJ = Math.floor(Math.random() * 10);
      console.log(randomPokemonI, randomPokemonJ, "kkkkkkkk");

      if (boxIsEmpty(state.board, randomPokemonI, randomPokemonJ)) {
        return {
          randomPokemonI,
          randomPokemonJ,
        };
      } else return generateRandomPokemonPosition();
    };
    const { randomPokemonI, randomPokemonJ } = generateRandomPokemonPosition();
    console.log("log inside random pokemons after restart");
    return { randomPokemonI, randomPokemonJ, randomPokemon };
  };

  // create random pokemon and random position for it
  const { randomPokemonI, randomPokemonJ, randomPokemon } = useMemo(
    generateRandomPokemon,
    [state.capturedPokemons, state.restartGame]
  );

  //update the state with the pokemon created
  useEffect(() => {
    dispatch({
      type: "UPDATE_POKEMON_POSITION",
      i: randomPokemonI,
      j: randomPokemonJ,
      pokemon_value: `${randomPokemon}`,
    });
    console.log("pokemon pos", state.pokemon.i, state.pokemon.j);
  }, [state.capturedPokemons, state.restartGame]);

  //create buttonsMatrix
  const buttonsMatrix = state.board.map((row, i) => {
    const currentRow = row.map((number, j) => (
      <Box
        number={number}
        key={`${i}${j}`}
        onClick={() => boxClickHandler(i, j)}
      />
    ));
    return currentRow;
  });

  return (
    <div
      className={classes.board + ` ${props.gameIsOver ? classes.gameOver : ""}`}
    >
      {buttonsMatrix}
    </div>
  );
};

export default Board;
