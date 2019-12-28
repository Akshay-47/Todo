import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, title, content, actions, onDismiss }) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div onClick={e => e.preventDefault()} className="modal-content">
        <span onClick={onDismiss} className="close">
          &times;
        </span>
        <div className="modal-header">
          <h1 className="title">{title}</h1>
        </div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
        <div></div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
