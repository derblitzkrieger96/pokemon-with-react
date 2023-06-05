import { createContext, useReducer } from "react";

const UPDATE_PLAYER_POSITION = "UPDATE_PLAYER_POSITION";
const UPDATE_POKEMON_POSITION = "UPDATE_POKEMON_POSITION";
const UPDATE_CAPTURED_POKEMONS = "UPDATE_CAPTURED_POKEMONS";
const UPDATE_SCORE = "UPDATE_SCORE";
const GAME_IS_OVER = "GAME_IS_OVER";
const RESTART_GAME = "RESTART_GAME";
const UPDATE_CAPTURED = "UPDATE_CAPTURED";

//define initial state (plain text)
const plainTextState = {
  tamanho: 10,
  movimientos: 12,
  board: [
    "0000110000",
    "0000000000",
    "0110000000",
    "0001010000",
    "0111111000",
    "0000001000",
    "0001001000",
    "0111001000",
    "0000100000",
    "0000000016",
  ],
  player: {
    i: 9,
    j: 9,
  },
  pokemon: {
    i: 0,
    j: 0,
  },
  capturedPokemons: 0,
  captured: {},
  score: 0,
  gameIsOver: false,
  restartGame: 0,
};

// create boardMatrix
let boardMatrix = plainTextState.board.reduce((acumulator, row) => {
  const currentRow = row.split("");
  acumulator.push(currentRow);
  return acumulator;
}, []);

//create initialState
const initialState = {
  ...plainTextState,
  board: boardMatrix,
};

//create context
export const StateContext = createContext(initialState);

//define reducer
const reducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case UPDATE_PLAYER_POSITION:
      const currentI = newState.player.i;
      const currentJ = newState.player.j;
      newState.board[currentI][currentJ] = "0";
      newState.player.i = action.i;
      newState.player.j = action.j;
      newState.board[action.i][action.j] = "6";
      return newState;

    case UPDATE_POKEMON_POSITION:
      newState.board.reduce((accumulator, row) => {
        const currentRow = row.reduce((accumulatorTwo, number) => {
          if (number != "1" && number != "6") accumulatorTwo.push(number);
          else accumulatorTwo.push("0");
          return accumulatorTwo;
        }, []);
        accumulator.push(currentRow);
        return accumulator;
      }, []);
      const currentIPok = newState.pokemon.i;
      const currentJPok = newState.pokemon.j;
      if (newState.board[currentIPok][currentJPok] != "6") {
        newState.board[currentIPok][currentJPok] = "0";
      }
      newState.pokemon.i = action.i;
      newState.pokemon.j = action.j;
      newState.board[action.i][action.j] = action.pokemon_value;
      return newState;

    case UPDATE_CAPTURED_POKEMONS:
      newState.capturedPokemons += 1;
      if (!newState.captured[action.pokemon]) {
        newState.captured[action.pokemon] = 1;
      } else newState.captured[action.pokemon] += 1;
      console.log(
        "updated captured pokemons:",
        newState.capturedPokemons,
        "types: ",
        newState.captured
      );
      return newState;
    case UPDATE_CAPTURED:
      newState.captured[action.pokemon] += 1;
      console.log(newState.captured);
      return newState;

    case UPDATE_SCORE:
      newState.score += 1;
      return newState;

    case GAME_IS_OVER:
      newState.gameIsOver = action.gameIsOver;

      return newState;

    case RESTART_GAME:
      let updatedState = { ...newState, ...action.newStateObj };
      updatedState.restartGame += 1;
      return updatedState;

    default:
      return newState;
  }
};

// Create a custom provider component
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
