import classes from "./Box.module.css";
const paths = {
  0: "./../../../public/images/casillaVacia.png",
  1: "./../../../public/images/casillaObstaculo.png",
  6: "./../../../public/images/casillaJugador.png",
  7: "./../../../public/images/charmander.png",
  8: "./../../../public/images/pikachu.png",
  9: "./../../../public/images/squirtle.png",
};
const Box = (props) => {
  return (
    <button className={classes.box} onClick={props.onClick}>
      <img className={classes.img} src={paths[props.number]} alt="" />
    </button>
  );
};

export default Box;
