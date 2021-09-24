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
  const [cheatSheet, setCheatSheet] = useState("CHEAT SHEET");
  const [requestBtn, setRequestBtn] = useState("REQUEST AN ARTICLE");
    useEffect(() => {
      window.onscroll = () => {
        window.pageYOffset < 350 ? setCheatSheet('CHEAT SHEET') : setCheatSheet(window.pageYOffset);
        window.pageYOffset < 350 ? setRequestBtn('REQUEST AN ARTICLE') : setRequestBtn("REQUEST");
      }
    }, []);

  return (
    <>
      <div className="header">
        <div className="logo-header">
          <Link style={{ textDecoration: "none" }} to="/">
            <span onScroll={setCheatSheet} className="helvetica-bold logo">{cheatSheet}</span>
          </Link>
        </div>
        <div className="articleRequest-btn">
          <Link style={{ textDecoration: "none" }} to="/request">
            <button onScroll={setRequestBtn} className="btn btn-primary request-font helvetica-bold">
              {requestBtn}
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
