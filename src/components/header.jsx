import React from "react";
import "../App.css";
import SearchField from "./searchField";
import SearchTags from "./searchTags";

const Header = () => {
  return (
    <>
      <div className="row mt-4 mb-5">
        <div className="col-4 logo-header">
          <h1>CHEAT SHEET</h1>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <button className="btn btn-primary request-font">
            <b>REQUEST AN ARTICLE</b>
          </button>
        </div>
      </div>
      <div className="justify-content-center">
        <SearchField />
        <SearchTags />
      </div>
    </>
  );
};

export default Header;
