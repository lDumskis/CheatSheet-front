import React, { useEffect, useContext } from "react";
import TextFields from "../common/TextFields";
import SearchContext from "../../context/SearchContext";
import axios from "axios";

const AllView = ({ result, setResult }) => {
  const { isAdmin, setIsAdmin, token, setToken } = useContext(SearchContext);

  useEffect(() => {
    if (token === "") {
      const username = prompt("Enter the username: ");
      const password = prompt("Enter the password: ");
      axios
        .post("https://wtdback.qa.bazaarvoice.com//api/api-token-auth/", {
          username: username,
          password: password,
        })
        .then((response) => {
          setToken(response.data.token);
          setIsAdmin(true);
        });
    } else {
      setIsAdmin(true);
      console.log(token);
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
