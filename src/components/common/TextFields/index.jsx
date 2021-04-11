import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../../../context/searchContext";
import "./index.css";
import Tag from "../Tag";

const TextFields = ({ info, access }) => {
  const { setSTAgs, sTags } = useContext(SearchContext);
  let theID = "";

  access === "admin" ? (theID = info.id + "+") : (theID = info.id);
  return (
    <div className="col-6 mt-4">
      <div className="resultBox">
        <h5 className="resultHeader bg-light p-2">{info && info.title}</h5>
        <div className="resultSnippet">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/article/" + theID}
          >
            <p className="q_text">{info && info.q}</p>
          </Link>
          <div className="row">
            <div classNAme="col">
              <div className="tag-container">
                {info.t.map((item) => (
                  <Tag name={item.tag} setTags={setSTAgs} tags={sTags} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFields;
