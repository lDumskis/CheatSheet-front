import React, { useState, useEffect, useContext } from "react";
import SelectedTags from "../SelectedTags";
import TextFields from "../common/TextFields";
import SearchContext from "../../context/SearchContext";

const AllView = ({ result }) => {
  const { isAdmin, setIsAdmin, ADMIN_PW } = useContext(SearchContext);

  useEffect(() => {
    if (isAdmin) {
      console.log("LoggedIn");
    } else {
      let password = prompt("Enter the password: ");
      if (password === ADMIN_PW) {
        setIsAdmin(true);
      } else password = prompt("Enter the password: ");
    }
  }, []);

  return (
    <>
      <SelectedTags />
      <h2 className="center-h1 bv-blue-text">Requested</h2>
      {result.map(
        (article) =>
          !article.isPublished &&
          isAdmin && <TextFields info={article} access="admin" />
      )}

      <hr />

      <h2
        className="center-h1 bv-blue-text
      "
      >
        Currently live
      </h2>
      {result.map(
        (article) =>
          article.isPublished &&
          isAdmin && <TextFields info={article} access="admin" />
      )}
    </>
  );
};

export default AllView;
