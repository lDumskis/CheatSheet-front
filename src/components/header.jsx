import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import SearchField from "./searchField";
import SearchTags from "./searchTags";

const Header = () => {
  return (
    <>
      <div className="row mt-4 mb-5">
        <div className="col-4 logo-header">
          <Link style={{ textDecoration: "none" }} to="/">
            <h1>CHEAT SHEET</h1>
          </Link>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <Link style={{ textDecoration: "none" }} to="/request">
            <button className="btn btn-primary request-font">
              <b>REQUEST AN ARTICLE</b>
            </button>
          </Link>
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
