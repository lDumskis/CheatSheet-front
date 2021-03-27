import React from "react";
import "../App.css";
import SearchField from "./searchField";
import SearchTags from "./searchTags";

const Header = () => {
  return (
    <div className="container-fluid p-2">
      <div className="row mt-4 mb-5">
        <div className="col-3">
          <h1>CHEAT SHEET</h1>
        </div>
        <div className="col-6"></div>
        <div className="col-3">
          <button className="btn btn-primary rounded-pill">
            REQUEST AN ARTICLE
          </button>
        </div>
      </div>
      <SearchField />
      <SearchTags />
    </div>
  );
};

export default Header;
