import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./index.css";
import LinkInput from "../common/LinkInput";
import SearchContext from "../../context/SearchContext";
import Select from "react-dropdown-select";
import Modal from "../common/Modal";

const SubmitArticle = ({ update = false, article, handleDelete }) => {
  const [links, setLinks] = useState([""]);
  const [newTags, setNewTags] = useState();
  const [title, setTitle] = useState("");
  const [title_fr, setTitle_fr] = useState("");
  const [title_de, setTitle_de] = useState("");
  const [answer, setAnswer] = useState("");
  const [answer_fr, setAnswer_fr] = useState("");
  const [answer_de, setAnswer_de] = useState("");
  const [question, setQuestion] = useState("");
  const [question_fr, setQuestion_fr] = useState("");
  const [question_de, setQuestion_de] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [emptyTitle, setEmptyTitle] = useState("articleTitle");
  const [emptyQuestionDetails, setEmptyQuestionDetails] =
    useState("Question details");

  const { tags, setLanguage, language } = useContext(SearchContext);

  function SubmitNewArticle() {
    if (title === "") {
      setEmptyTitle("articleEmptyTitle");
      console.log(title);
    } else if (question === "") {
      setEmptyQuestionDetails("emptyQuestionDetails");
    } else {
      console.log(title);
      try {
        axios.post("https://wtdback.qa.bazaarvoice.com/api/", {
          title: title,
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
  }

  function UpdateArticle() {
    axios.put("https://wtdback.qa.bazaarvoice.com/api/" + article.id, {
      title: title,
      title_fr: title_fr,
      title_de: title_de,
      q: question,
      q_fr: question_fr,
      q_de: question_de,
      a: answer,
      a_fr: answer_fr,
      a_de: answer_de,
      n: 0,
      isPublished: true,
      email: email,
      nickname: "Default",
      t: newTags,
      l: links,
      suggested_a: "",
    });
  }

  useEffect(() => {
    if (update) {
      setTitle(article.title);
      setTitle_fr(article.title_fr);
      setTitle_de(article.title_de);
      setQuestion(article.q);
      setQuestion_de(article.q_de);
      setQuestion_fr(article.q_fr);
      setAnswer(article.a);
      setAnswer_fr(article.a_fr);
      setAnswer_de(article.a_de);
      setEmail(article.email);
    }
  }, [article ? article.t : update]);

  return (
    <div className="ms-3 ps-5 pe-5" id="submissionForm">
      <h2 className="card-title text-center display-5 pageTitle helvetica-medium">
        {update ? "Update " : "Create"} an Article
      </h2>
      <div className="row">
        <div className="offset-6 col-3 langFlags">
          <p onClick={() => setLanguage("en")}>
            <span role="img" aria-label="french-flag">
              🇺🇸
            </span>
          </p>
          <p onClick={() => setLanguage("fr")}>
            <span role="img" aria-label="french-flag">
              🇫🇷
            </span>
          </p>
          <p onClick={() => setLanguage("de")}>
            <span role="img" aria-label="germany-flag">
              🇩🇪
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <input
            placeholder="Question Title"
            id={emptyTitle}
            className="form-control titleField"
            value={
              (language === "en" && title) ||
              (language === "fr" && title_fr) ||
              (language === "de" && title_de)
            }
            onChange={
              (language === "en" && ((e) => setTitle(e.target.value))) ||
              (language === "fr" && ((e) => setTitle_fr(e.target.value))) ||
              (language === "de" && ((e) => setTitle_de(e.target.value)))
            }
            onInput={() => setEmptyTitle("articleTitle")}
          />
          <input
            placeholder="Detailed question"
            id={emptyQuestionDetails}
            className="form-control titleField"
            value={
              (language === "en" && question) ||
              (language === "fr" && question_fr) ||
              (language === "de" && question_de)
            }
            onChange={
              (language === "en" && ((e) => setQuestion(e.target.value))) ||
              (language === "fr" && ((e) => setQuestion_fr(e.target.value))) ||
              (language === "de" && ((e) => setQuestion_de(e.target.value)))
            }
            onInput={() => setEmptyQuestionDetails("Question details")}
          />
          <textarea
            id="subArticle"
            type="text"
            className="form-control articleBody mt-2"
            placeholder="Add as many details as you can."
            style={{ resize: "none" }}
            value={
              (language === "en" && answer) ||
              (language === "fr" && answer_fr) ||
              (language === "de" && answer_de)
            }
            onChange={
              (language === "en" && ((e) => setAnswer(e.target.value))) ||
              (language === "fr" && ((e) => setAnswer_fr(e.target.value))) ||
              (language === "de" && ((e) => setAnswer_de(e.target.value)))
            }
          />
        </div>
        <div className="col-3 d-flex flex-column justify-content-between">
          <div className="input-group mb-1">
            {update && (
              <Select
                multi={true}
                options={tags}
                searchBy={tags.tag}
                labelField="tag"
                valueField="tag"
                keepSelectedInList={true}
                searchable={true}
                create={true}
                values={article.t ? [...article.t] : ""}
                onChange={(values) => setNewTags(values)}
              />
            )}
            {update === false && (
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
            )}
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
  {/*     additional KB links - removed "supporting material"
      <div className="row">
        <div className="col-3 mt-2">
          <LinkInput links={links} setLinks={setLinks} />
        </div>
      </div>
    */}
      <div className="row justify-content-end">
        <div className="col-2 mt-2">
          <button
            onClick={() => handleDelete()}
            className="btn btn-bv edit-icon"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
        <div className="mt-2 offset-8 col-2">
          <button
            onClick={() => (update ? UpdateArticle() : SubmitNewArticle())}
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
