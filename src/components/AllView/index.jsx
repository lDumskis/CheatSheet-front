import React, { useEffect, useContext } from "react";
import TextFields from "../common/TextFields";
import SearchContext from "../../context/SearchContext";

const AllView = ({ result, setResult }) => {
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
      <h2 className="center-h1 bv-blue-text">Requested</h2>
      {result.map(
        (article) =>
          (!article.isPublished || article.suggested_a !== "") &&
          isAdmin && (
            <TextFields
              info={article}
              result={result}
              setResult={setResult}
              access="admin"
            />
          )
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
          (article.isPublished || article.suggested_a === "") &&
          isAdmin && <TextFields info={article} access="admin" />
      )}
    </>
  );
};

export default AllView;
