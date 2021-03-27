import React from "react";
import "./singleArticlepage.css";

const SingleArticlePage = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="resultBoxArticle">
          <h2 className="resultHeaderArticle bg-light p-2">QUESTION TITLE</h2>
          <div className="row">
            <div className="offset-6 col-2 langFlags">
              <span>en</span>
              <span>fr</span>
              <span>de</span>
            </div>
          </div>
          <div className="resultSnippetArticle row mt-3">
            <div className="col-8">
              <div className="answerTarget">
                <p className="answerField">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  velit erat, ultricies at elit sit amet, dapibus fringilla
                  magna. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Vivamus suscipit dignissim ex
                  nec pharetra. Duis condimentum elementum dui, in efficitur
                  nibh tempus vitae. Mauris aliquam elit non est tempus
                  porttitor sed et lacus. Nulla facilisi. Donec elit libero,
                  rhoncus vitae ullamcorper eget, euismod sed enim. Quisque
                  imperdiet erat arcu, a auctor justo dignissim imperdiet.
                  Vivamus quis feugiat lectus. Donec venenatis mi non ligula
                  egestas molestie. Aliquam porttitor nunc quis facilisis
                  finibus. Praesent vehicula facilisis nisl, nec viverra lacus
                  luctus nec. Nullam sed turpis sed lectus venenatis sagittis.
                  Praesent bibendum imperdiet arcu pharetra mattis
                </p>
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

                  <a href="#" className="btn mt-2 btn-bv">
                    Knowledge base
                  </a>
                  <br />
                  <a href="#" className="btn mt-2 btn-bv">
                    Knowledge base
                  </a>
                  <br />
                  <a href="#" className="btn mt-2 btn-bv">
                    Knowledge base
                  </a>
                  <br />
                  <a href="#" className="btn mt-2 btn-bv">
                    Knowledge base
                  </a>
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
