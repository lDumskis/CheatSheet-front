import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const TextFields = ({ info }) => {
  return (
    <div className="col-6 mt-4">
      <div className="resultBox">
        <h5 className="resultHeader bg-light p-2">{info && info.title}</h5>
        <div className="resultSnippet">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/article/" + info.id}
          >
            <p className="q_text">{info && info.a}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextFields;
