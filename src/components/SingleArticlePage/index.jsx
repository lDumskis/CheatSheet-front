import React, { useEffect, useState, useContext } from "react";
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
                <p>en</p>
                <p>fr</p>
                <p>de</p>
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
                        <em>Written by Someone</em>
                      </p>
                    </div>
                    <div className="offset-6 col-1">
                      <i class="far fa-clone font"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-4">
                <div className="knowMore alight-baseline">
                  <div class="centerButtons">
                    <h3>Supporting Material</h3>
                    <a href="#" className="btn mt-3 btn-bv">
                      Knowledge base
                    </a>
                    <br />
                    <a href="#" className="btn mt-3 btn-bv">
                      Confluenza base
                    </a>
                    <br />
                    <a href="#" className="btn mt-3 btn-bv">
                      TestPage
                    </a>
                    <br />
                    <a href="#" className="btn mt-3 btn-bv">
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
      <div className="row">
        <div className="col">
          <div>
            <h2 className="resultHeaderArticle bg-light p-2 helvetica-medium bv-blue-text">
              {article.title}
            </h2>
            <div className="row">
              <div className="offset-6 col-3 langFlags">
                <p>en</p>
                <p>fr</p>
                <p>de</p>
              </div>
            </div>
            <div className="resultSnippetArticle row mt-3">
              <div className="col-8">
                <div className="answerTarget">
                  <p className="answerField helvetica">{article.a}</p>
                  <div className="row">
                    <div className="col-4">
                      <p className="authorDisclaimer">
                        <em>Written by Someone</em>
                      </p>
                    </div>
                    <div className="offset-6 col-1">
                      <i class="far fa-clone font"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-4">
                <div className="knowMore alight-baseline">
                  <div class="centerButtons">
                    <h3>Supporting Material</h3>
                    <a href="#" className="btn mt-3 btn-bv">
                      Knowledge base
                    </a>
                    <br />
                    <a href="#" className="btn mt-3 btn-bv">
                      Confluenza base
                    </a>
                    <br />
                    <a href="#" className="btn mt-3 btn-bv">
                      TestPage
                    </a>
                    <br />
                    <a href="#" className="btn mt-3 btn-bv">
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
  }
};

export default SingleArticlePage;
