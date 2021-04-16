import React, { useState, useContext } from "react";
import axios from "axios";
import "./index.css";
import LinkInput from "../common/LinkInput";
import SearchContext from "../../context/SearchContext";
import Select from "react-dropdown-select";
import Modal from "../common/Modal";

const SubmitArticle = () => {
  const [links, setLinks] = useState([""]);
  const [newTags, setNewTags] = useState();
  const [title, setTitle] = useState();
  const [answer, setAnswer] = useState();
  const [question, setQuestion] = useState();
  const [email, setEmail] = useState();
  const [showModal, setShowModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);

  const { tags } = useContext(SearchContext);

  function SubmitNewArticle() {
    try {
      axios.post("https://wtdback.qa.bazaarvoice.com/api/", {
        title: "Requested Post",
        q: question,
        a: answer,
        n: 0,
        isPublished: true,
        email: email,
        nickname: "Default",
        t: newTags,
        l: links,
      });
      setShowModal((prev) => !prev);
      setRequestModal(false);
    } catch (error) {}
  }

  return (
    <div className="ms-3 ps-5 pe-5" id="submissionForm">
      <h2 className="card-title text-center display-5 pageTitle helvetica-medium">
        Create an Article
      </h2>
      <div className="row">
        <div className="col-9">
          <input
            placeholder="Question Title"
            id="articleTitle"
            className="form-control titleField"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <input
            placeholder="Detailed question"
            id="Question details"
            className="form-control titleField"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="subArticle"
            type="text"
            className="form-control articleBody mt-2"
            placeholder="Add as many details as you can."
            style={{ resize: "none" }}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className="col-3 d-flex flex-column justify-content-between">
          <div className="input-group mb-1">
            <Select
              multi={true}
              options={tags}
              searchBy={tags.tag}
              labelField="tag"
              valueField="tag"
              keepSelectedInList={true}
              searchable={true}
              create={true}
              onChange={(values) => setNewTags(values)}
            />
          </div>

          <div className="mt-auto">
            <input
              id="RequesterEmail"
              className="userEmail"
              placeholder=" Your email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button
            onClick={() => SubmitNewArticle()}
            id="submit"
            className="btn btn-success"
          >
            Submit
          </button>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            onClose={() => setShowModal(false)}
            requestModal={requestModal}
          />
        </div>
      </div>
    </div>
  );
};

export default SubmitArticle;
