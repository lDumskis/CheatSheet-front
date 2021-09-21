import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";
import SearchContext from "../../context/SearchContext";
import SubmitArticle from "../SubmitArticle";

const SingleArticlePage = () => {
  const { isAdmin, setIsAdmin, ADMIN_PW, language, setLanguage } =
    useContext(SearchContext);

  let { id } = useParams();
  let admin;
  id.endsWith("+") ? (admin = true) : (admin = false);

  admin ? (id = id.slice(0, -1)) : (id = id);

  const baseURLId = "https://wtdback.qa.bazaarvoice.com/api/" + id;
  const [article, setArticle] = useState([]);
  const [suggestion, setSuggestion] = useState("");
  const [classes, setClasses] = useState("row mt-4 d-none");
  const [editPending, setEditPending] = useState(false);
  const myRef = useRef(null);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  useEffect(() => {
    getArticle();
  }, []);

  useEffect(() => {
    if (article.suggested_a !== "") {
      setEditPending(true);
    }
  }, [article]);

  useEffect(() => {
    if (admin) {
      if (isAdmin) {
        console.log("LoggedIn");
      } else {
        let password = prompt("Enter the password: ");
        if (password === ADMIN_PW) {
          setIsAdmin(true);
        } else password = prompt("Enter the password: ");
      }
    }
  }, [admin]);

  const getArticle = () => {
    axios.get(baseURLId).then((response) => {
      console.log(response.data);

      setArticle(response.data);
    });
  };

  function handleDelete() {
    axios.delete(baseURLId);
    //to add History back automation
  }

  function handleEditButton() {
    setClasses("row mt-4");
  }

  function handleSubmitChangeRequest() {
    axios.put(baseURLId, {
      title: article.title,
      q: article.q,
      a: article.a,
      n: 0,
      isPublished: true,
      email: article.email,
      nickname: "Default",
      t: article.t,
      l: article.l,
      suggested_a: suggestion,
    });
    setShow1(true);
    setTimeout(() => {
      setShow1(false);
    }, 1000);
  }

  useEffect(() => {
    try {
      myRef.current.scrollIntoView();
      setSuggestion(
        (language === "en" && article.a) ||
          (language === "fr" && article.a_fr) ||
          (language === "de" && article.a_de)
      );
    } catch (e) {}
  }, [classes, language]);

  function handleCopy() {
    navigator.clipboard.writeText(
      (language === "en" && article.a) ||
        (language === "fr" && article.a_fr) ||
        (language === "de" && article.a_de)
    );
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }

  if (admin && isAdmin) {
    return (
      <div className="row">
        <SubmitArticle
          update={true}
          article={article}
          handleDelete={handleDelete}
        />
      </div>
    );
  } else {
    return (
      <>
        <div className="row">
          <div className="col">
            <div>
              <h2 className="resultHeaderArticle bg-light p-2 helvetica-medium bv-blue-text">
                {language === "en" && article.title}
                {language === "fr" && article.title_fr}
                {language === "de" && article.title_de}
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

              <div className="resultSnippetArticle mt-3">
                <div className="answerTarget">
                  <p className="answerField helvetica">
                    {language === "en" && article.a}
                    {language === "fr" && article.a_fr}
                    {language === "de" && article.a_de}
                  </p>
                  <div className="spacer"></div>
                  <div className="articleFooter">
                      <div className="author">
                        <p className="authorDisclaimer">
                          <em>Written by {article.nickname}</em>
                        </p>
                      </div>
                      <div className="edit">
                        <button
                          onClick={() => handleEditButton()}
                          className="btn btn-bv edit-icon"
                        >
                          <i className="far fa-edit"></i>
                        </button>
                      </div>
                      <div className="copy">
                        <button
                          onClick={() => handleCopy()}
                          className="btn btn-bv copy-icon"
                        >
                          Copy <i className="far fa-clone"></i>
                        </button>
                      </div>
                  </div>
                </div>
                {/*
                <div className="col-4">
                  <div className="knowMore alight-baseline">
                    <div class="centerButtons">
                      <h3>Supporting Material</h3>
                      <a href="#" className="btn mt-5 px-6 btn-bv btn-support">
                        Knowledge base
                      </a>
                      <br />
                      <a href="#" className="btn mt-4 px-6 btn-bv btn-support">
                        Confluenza base
                      </a>
                      <br />
                      <a href="#" className="btn mt-4 px-6 btn-bv btn-support">
                        TestPage
                      </a>
                      <br />
                      <a href="#" className="btn mt-4 px-6 btn-bv btn-support">
                        MoreStuff base
                      </a>
                    </div>
                  </div>
                </div>
*/}
              </div>
            </div>
          </div>
        </div>

        <div className={classes} ref={myRef}>
          <h3>Request a change</h3>
          <p>
            Adjust the text to the way you think it should look like and add any
            URLs Search tags as a free text under the actual text you are
            modifying
          </p>
          <div className="col-10">
            <textarea
              rows="20"
              style={{ width: "100%", resize: "none" }}
              className="answerField helvetica"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => handleSubmitChangeRequest()}
              className="btn btn-bv"
            >
              Submit a Request
            </button>
          </div>
        </div>
        {show && (
          <div className="alert alert-primary copied-alert" role="alert">
            Text was officially Copied
          </div>
        )}
        {show1 && (
          <div className="alert alert-primary copied-alert" role="alert">
            Request Submitted
          </div>
        )}
      </>
    );
  }
};

export default SingleArticlePage;
