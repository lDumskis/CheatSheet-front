import React, { useState } from "react";
import "./index.css";
import LinkInput from "../common/LinkInput";

const SubmitArticle = () => {
  const [links, setLinks] = useState(["link1"]);
  return (
    <div className="ms-3 ps-5 pe-5" id="submissionForm">
      <h2 className="card-title text-center display-5 pageTitle helvetica-medium">
        Create an Article
      </h2>
      <div className="row">
        <div className="col-9">
          <input
            placeholder="Title"
            id="articleTitle"
            className="form-control titleField"
          />
          <textarea
            id="subArticle"
            type="text"
            className="form-control articleBody mt-2"
            placeholder="Add as many details as you can."
            style={{ resize: "none" }}
          />
        </div>
        <div className="col-3 d-flex flex-column justify-content-between">
          <div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. syndication"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
          <div className="mt-auto">
            <input
              id="RequesterEmail"
              className="userEmail"
              placeholder=" Your email *"
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 mt-2">
          <LinkInput links={links} setLinks={setLinks} />
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="mt-2 offset-10 col-2">
          <button id="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitArticle;
