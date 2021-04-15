import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";
import SearchContext from "../../context/SearchContext";

const SingleArticlePage = () => {
  const { isAdmin, setIsAdmin, ADMIN_PW } = useContext(SearchContext);

  let { id } = useParams();
  let admin;
  id.endsWith("+") ? (admin = true) : (admin = false);

  admin ? (id = id.slice(0, -1)) : (id = id);

  const baseURLId = "https://wtdback.qa.bazaarvoice.com/api/" + id;
  const [article, setArticle] = useState([]);
  const [suggestion, setSuggestion] = useState("");
  const [classes, setClasses] = useState("row mt-4 d-none");
  const myRef = useRef(null);

  useEffect(() => {
    getAllArticles();
  }, []);

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

  const getAllArticles = () => {
    axios.get(baseURLId).then((response) => {
      console.log(baseURLId);
      setArticle(response.data);
    });
  };

  function handleDelete() {
    axios.delete("https://wtdback.qa.bazaarvoice.com/api/" + id);
    //to add History back automation
  }

  function handleEditButton() {
    setClasses("row mt-4");
  }

  function handleSubmitChangeRequest() {
    const current = article.a;
    const newOne = suggestion;
  }

  useEffect(() => {
    myRef.current.scrollIntoView();
    setSuggestion(article.a);
  }, [classes]);

  if (admin && isAdmin) {
    return (
      <div className="row">
        <div className="col">
          <div>
            <h2 className="resultHeaderArticle bg-light p-2 helvetica-medium bv-blue-text">
              {article.title}
            </h2>
            <div className="row">
              <div className="offset-6 col-3 langFlags">
                <p>
                  <span role="img" aria-label="french-flag">
                    🇺🇸
                  </span>
                </p>
                <p>
                  <span role="img" aria-label="french-flag">
                    🇫🇷
                  </span>
                </p>
                <p>
                  <span role="img" aria-label="germany-flag">
                    🇩🇪
                  </span>
                </p>
              </div>
            </div>
            <div className="resultSnippetArticle row mt-3">
              <div className="col-8">
                <div className="answerTarget">
                  <textarea
                    rows="20"
                    cols="60"
                    className="answerField helvetica"
                    value={article.a}
                  />
                  <div className="row">
                    <div className="col-4">
                      <p className="authorDisclaimer">
                        <em>Written by {article.nickname}</em>
                      </p>
                    </div>
                    <div
                      onClick={() => handleDelete()}
                      className="offset-6 col-1"
                    >
                      X
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-4">
                <div className="knowMore alight-baseline">
                  <div class="centerButtons">
                    <h3>Supporting Material</h3>
                    <a href="#" className="btn mt-3 px-3 btn-bv btn-support">
                      Knowledge base
                    </a>
                    <br />
                    <a href="#" className="btn mt-3 px-3 btn-bv btn-support">
                      Confluenza base
                    </a>
                    <br />
                    <a href="#" className="btn mt-3 px-5 btn-bv btn-support">
                      TestPage
                    </a>
                    <br />
                    <a href="#" className="btn mt-3 px-3 btn-bv btn-support">
                      MoreStuff base
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="row">
          <div className="col">
            <div>
              <h2 className="resultHeaderArticle bg-light p-2 helvetica-medium bv-blue-text">
                {article.title}
              </h2>
              <div className="row">
                <div className="offset-6 col-3 langFlags">
                  <p>
                    <span role="img" aria-label="french-flag">
                      🇺🇸
                    </span>
                  </p>
                  <p>
                    <span role="img" aria-label="french-flag">
                      🇫🇷
                    </span>
                  </p>
                  <p>
                    <span role="img" aria-label="germany-flag">
                      🇩🇪
                    </span>
                  </p>
                </div>
              </div>
              <div className="resultSnippetArticle row mt-3">
                <div className="col-8">
                  <div className="answerTarget">
                    <p className="answerField helvetica">{article.a}</p>
                    <div className="row">
                      <div className="col-4">
                        <p className="authorDisclaimer">
                          <em>Written by {article.nickname}</em>
                        </p>
                      </div>
                      <div className="offset-1 col-3">
                        <button
                          onClick={() => handleEditButton()}
                          className="btn btn-bv edit-icon"
                        >
                          <i className="far fa-edit"></i>
                        </button>
                      </div>
                      <div className="offset-1 col-3">
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(article.a)
                          }
                          className="btn btn-bv copy-icon"
                        >
                          Copy <i className="far fa-clone"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-4">
                  <div className="knowMore alight-baseline">
                    <div class="centerButtons">
                      <h3>Supporting Material</h3>
                      <a href="#" className="btn mt-3 px-3 btn-bv btn-support">
                        Knowledge base
                      </a>
                      <br />
                      <a href="#" className="btn mt-3 px-3 btn-bv btn-support">
                        Confluenza base
                      </a>
                      <br />
                      <a href="#" className="btn mt-3 px-5 btn-bv btn-support">
                        TestPage
                      </a>
                      <br />
                      <a href="#" className="btn mt-3 px-3 btn-bv btn-support">
                        MoreStuff base
                      </a>
                    </div>
                  </div>
                </div>
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
      </>
    );
  }
};

export default SingleArticlePage;
