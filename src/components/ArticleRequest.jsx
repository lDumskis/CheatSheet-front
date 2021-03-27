import React from "react";
import "./articleRequests.css";

const ArticleRequest = () => {
  return (
    <div className="col">
      <h2 className="card-title text-center display-5">Request an Article</h2>
      <div className="row">
        <label
          for="RequestQuestion"
          className="form-label"
          id="reqLabelOverride"
        >
          What is your question?
        </label>
        <div className="col-9">
          <textarea
            id="requestQuestion"
            type="text"
            className="form-control requestQuestion"
            placeholder="Add as many details as you can."
          />
        </div>
        <div className="col-3 d-flex flex-column justify-content-between">
          <button className="rounded-circle attachButton">
            <img
              src="https://www.orbitaldebris.jsc.nasa.gov/images/beehives/geo256_p.jpg"
              className="rounded-circle attachIcon"
            />
          </button>
          <input id="RequesterEmail" placeholder="Your email *"></input>
        </div>
      </div>
      <div className="row justify-content-end mt-1">
        <p className="emailMeFooter col-4">
          notify me when a response is posted
        </p>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="EmailPlz"
        />
      </div>
    </div>
  );
};

export default ArticleRequest;
