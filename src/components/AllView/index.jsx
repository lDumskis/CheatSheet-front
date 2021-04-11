import React from "react";
import SelectedTags from "../SelectedTags";
import TextFields from "../common/TextFields";

const AllView = ({ result }) => {
  return (
    <>
      <SelectedTags />
      <h2
        className="center-h1 bv-blue-text
      "
      >
        Requested
      </h2>
      {result.map(
        (article) =>
          !article.isPublished && <TextFields info={article} access="admin" />
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
          article.isPublished && <TextFields info={article} access="admin" />
      )}
    </>
  );
};

export default AllView;
