import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclick}></div>;
};

const ModalOverLays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onclick={props.onclick}/>, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverLays>{props.children}</ModalOverLays>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
