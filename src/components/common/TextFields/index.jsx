import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../../../context/SearchContext";
import "./index.css";
import Tag from "../Tag";
import axios from "axios";

const TextFields = ({ info, access, setShowAlert, result, setResult }) => {
  const { setSTAgs, sTags } = useContext(SearchContext);
  let theID = "";
  const baseURLId = "https://wtdback.qa.bazaarvoice.com/api/" + info.id;
  function handleCopy() {
    navigator.clipboard.writeText(info.a);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  }

  access === "admin" ? (theID = info.id + "+") : (theID = info.id);

  function handleDelete() {
    console.log(info.id);
    console.log(info);
    console.log(result);

    let newArray = result.filter((x) => {
      return x.id != info.id;
    });
    axios.delete(baseURLId);
    setResult(newArray);
  }

  return (
    <div className="col-6 mt-4">
      <div className="resultBox">
        <h5 className="resultHeader bg-white p-2 helvetica-medium">
          {info && info.title}
        </h5>
        <div className="resultSnippet">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/article/" + theID}
          >
            <p className="q_text helvetica">{info && info.q}</p>
          </Link>
          <div className="row">
            <div className="col-10">
              <div className="tag-container">
                {info.t.map((item) => (
                  <Tag name={item.tag} setTags={setSTAgs} tags={sTags} />
                ))}
              </div>
            </div>
            <div className="copy-in-text-field">
              <button
                onClick={() => handleCopy()}
                className="btn btn-bv copy-icon"
              >
                <i className="far fa-clone"></i>
              </button>
            </div>
            {access === "admin" && (
              <div className="delete-post">
                <button
                  onClick={() => handleDelete()}
                  className="btn btn-bv copy-icon"
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFields;
