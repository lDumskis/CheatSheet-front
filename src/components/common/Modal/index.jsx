import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function refreshPage() {
  window.location.reload(false);
}

const Modal = ({ showModal, setShowModal, onClose }) => {
  return (
    <>
      {showModal ? (
        <div className="modal-background" onClick={onClose}>
          <div className="modal-styles helvetica-bold">
            <span className="material-icons">done</span>
            <span id="modal-thank-you">Thank you! We got your request.</span>
            <div className="row-2">
              <Link to="/">
                <button className="btn-modal-home">HOME</button>
              </Link>
              <button onClick={refreshPage} className="btn-modal-another">
                GOT ANOTHER REQUEST?
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
