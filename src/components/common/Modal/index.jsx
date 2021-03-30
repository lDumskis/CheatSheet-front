import React from "react";
import "./index.css";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="modal-styles">
          <span className="material-icons">done</span>
          <br></br>
          Thank you! We got your request.
          <div className="row-2">
            <button className="btn-module">HOME</button>
            <button className="btn-module">HOT ANOTHER REQUEST?</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
