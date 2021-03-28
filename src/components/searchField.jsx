import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import SearchContext from "./../context/searchContext";

const SearchField = () => {
  const { articles, setArticles, setResult, search, setSearch } = useContext(
    SearchContext
  );

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
        <button className="btn btn-bv font">I am not used</button>
      </div>
    </div>
  );
};

export default SearchField;
