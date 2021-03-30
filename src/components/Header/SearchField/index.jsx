import React, { useState, useContext } from "react";
import "../../../App.css";
import SearchContext from "./../../../context/searchContext";

const SearchField = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [words] = useState("Motivated one");

  return (
    <div className="row height d-flex justify-content-center align-items-center">
      <div className="offset-1 col-7">
        <div className="search">
          <i className="fa fa-search" />
          <input
            value={search}
            type="text"
            className="form-control"
            placeholder="Have a question? Ask Now"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="col-2">
        <button
          className="btn btn-bv font"
          onClick={() => {
            alert("I will achieve great things one day! :D");
          }}
        >
          {words}
        </button>
      </div>
    </div>
  );
};

export default SearchField;
