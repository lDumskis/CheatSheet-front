import React, { useContext } from "react";
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
      <div className="row mt-4 mb-4">
        <div className="col-4 logo-header">
          <Link style={{ textDecoration: "none" }} to="/">
            <span className="helvetica-bold logo">CHEAT SHEET</span>
          </Link>
        </div>
        <div className="col-5">
          {isAdmin && (
            <button className="btn btn-danger" onClick={() => handleLogout()}>
              Logout
            </button>
          )}
        </div>
        <div className="col-3">
          <Link style={{ textDecoration: "none" }} to="/request">
            <button className="btn btn-primary request-font helvetica-bold">
              REQUEST AN ARTICLE
            </button>
          </Link>
        </div>
      </div>
      <div className="justify-content-center">
        <SearchField />
        <TagsSelector />
      </div>
    </>
  );
};

export default Header;
