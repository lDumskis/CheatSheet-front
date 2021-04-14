import React, { useContext } from "react";
import "../../../App.css";
import SearchContext from "../../../context/SearchContext";

const SearchField = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="row height d-flex justify-content-center align-items-center">
      <div className="offset-1 col-8">
        <div className="search">
          <i className="fa fa-search" />
          <input
            value={search}
            type="text"
            className="form-control helvetica-italic"
            placeholder="e.g. syndication"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchField;
