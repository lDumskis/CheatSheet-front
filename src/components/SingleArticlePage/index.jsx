import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";

const SingleArticlePage = () => {
  const { id } = useParams();
  console.log(id);

  const baseURLId = "https://wtdback.qa.bazaarvoice.com/api/" + id;
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getAllArticles();
  }, []);

  const getAllArticles = () => {
    axios.get(baseURLId).then((response) => {
      console.log(baseURLId);
      setArticle(response.data);
    });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="resultBoxArticle">
          <h2 className="resultHeaderArticle bg-light p-2">{article.title}</h2>
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
                <p className="answerField">{article.a}</p>
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

                  {/* <a href="#" className="btn mt-3 btn-bv">
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
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticlePage;
