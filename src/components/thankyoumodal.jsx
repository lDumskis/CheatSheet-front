import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Thankyoumodal = ({ showModal, setShowModal }) => {
  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div onClick={onCloseModal} className="modal-background-style">
          <div className="modal-styles">
            <span class="material-icons">done</span>
            <div>
              <h4 id="modal-pupup-text">Thank you! We got your request.</h4>
              <Link style={{ textDecoration: "none" }} to="/">
                <button className="btn-module-home">HOME</button>
              </Link>

              <button onClick={onCloseModal} className="btn-module-another">
                GOT ANOTHER REQUEST?
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Thankyoumodal;
