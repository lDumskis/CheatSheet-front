import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const TextFields = ({ info }) => {
  return (
    <div className="col-6 mt-4">
      <div className="resultBox">
        <h4 className="resultHeader bg-light p-2">{info && info.title}</h4>
        <div className="resultSnippet">
          <Link to={"/article/" + info.id}>
            <p className="q_text">{info && info.q}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextFields;
