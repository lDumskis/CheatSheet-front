import React from "react";
import "../App.css";
import magnifying_icon from "../images/magnifying_glass.png";

const SearchField = () => {
  return (
    <div className="row">
      <div className="offset-1 col-8">
        <div
          className="input-group mb-1
          
          "
        >
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            <img
              className="magnifying_icon"
              src={magnifying_icon}
              alt="magnifying icon"
            />
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. syndication"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
      <div className="col-2">
        <div>
          <button className="btn btn-light rounded" id="btn-search">
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
