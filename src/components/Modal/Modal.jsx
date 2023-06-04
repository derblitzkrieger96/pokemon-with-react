import classes from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={classes.container}>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal} onClick={null}>
        {children}
      </dialog>
    </div>
  );
};
export default Modal;
