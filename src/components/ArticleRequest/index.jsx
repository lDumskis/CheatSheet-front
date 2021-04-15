import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import Modal from "../common/Modal";

const ArticleRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");

  const openModal = () => {
    axios.post("https://wtdback.qa.bazaarvoice.com/api/", {
      title: "Requested Post",
      q: request,
      a: " ",
      n: 0,
      isPublished: false,
      email: email,
      nickname: "Default",
      t: [],
    });
    setShowModal((prev) => !prev);
  };

  return (
    <div className="col request-container">
      <h2 className="card-title text-center display-5 bv-blue-text">
        Request an Article
      </h2>
      <div className="row mt-4">
        <div className="col-9">
          <textarea
            id="requestQuestion"
            type="text"
            className="form-control requestQuestion"
            placeholder="Add as many details as you can."
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </div>
        <div className="col-3 d-flex flex-column justify-content-between">
          <button className="rounded-circle attachButton">
            <i className="fas fa-paperclip" />
          </button>
          <input
            id="requesterEmail"
            placeholder="Your email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-1">
        <div className="offset-9 col-4">
          <span className="emailMeFooter ">
            notify me when a response is posted
          </span>
          <input className="form-check-input" type="checkbox" value="" />
        </div>
      </div>
      <div className="row mt-4 ">
        <div className="offset-9 col-4">
          <button onClick={openModal} className="btn btn-bv font request-font">
            REQUEST
          </button>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleRequest;
