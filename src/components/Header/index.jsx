import React, { useContext, useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import SearchField from "./SearchField";
import TagsSelector from "./TagsSelector/TagsSelector";
import SearchContext from "../../context/SearchContext";

const Header = () => {
  const { isAdmin, setIsAdmin, setToken } = useContext(SearchContext);

  function handleLogout() {
    setToken("");
    setIsAdmin(false);
  }

  return (
    <>
      <div className="header">
        <div className="logo-header">
          <Link style={{ textDecoration: "none" }} to="/">
            <span className="helvetica-bold logo">CHEAT SHEET</span>
          </Link>
        </div>
        <div className="articleRequest-btn">
          <Link style={{ textDecoration: "none" }} to="/request">
            <button className="btn btn-primary request-font helvetica-bold">
            REQUEST AN ARTICLE
            </button>
          </Link>
        </div>
        <div className="logout-btn">
          {isAdmin && (
            <button className="btn btn-danger" onClick={() => handleLogout()}>
              Logout
            </button>
          )}
        </div>
        </div>
      <div className="header-search">
        <SearchField />
        <TagsSelector />
      </div>
    </>
  );
};

export default Header;
