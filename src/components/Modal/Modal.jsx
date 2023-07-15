import classes from "./Modal.module.css";
import { CgClose } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";
const Modal = ({ children, onClose }) => {
  return (
    <div className={classes.container}>
      <div className={classes.backdrop} onClick={null} />
      <dialog open className={classes.modal} onClick={null}>
        <CgClose className={classes.icon} onClick={onClose} />

        {children}
      </dialog>
    </div>
  );
};
export default Modal;
