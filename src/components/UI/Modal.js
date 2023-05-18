import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
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
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverLays>{props.children}</ModalOverLays>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
