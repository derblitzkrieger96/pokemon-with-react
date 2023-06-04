import classes from "./Box.module.css";
const paths = {
  0: "./../../../images/casillaVacia.png",
  1: "./../../../images/casillaObstaculo.png",
  6: "./../../../images/casillaJugador.png",
  7: "./../../../images/charmander.png",
  8: "./../../../images/pikachu.png",
  9: "./../../../images/squirtle.png",
};
const Box = (props) => {
  return (
    <button className={classes.box} onClick={props.onClick}>
      <img className={classes.img} src={paths[props.number]} alt="" />
    </button>
  );
};

export default Box;
