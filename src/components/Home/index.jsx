import React from "react";
import SelectedTags from "../SelectedTags";
import TextFields from "../common/TextFields";

const Home = ({ result }) => {
  return (
    <>
      <h1
        className="center-h1 bv-blue-text
      "
      >
        Popular topics
      </h1>
      <SelectedTags />
      {result.map(
        (article) => article.isPublished && <TextFields info={article} />
      )}
    </>
  );
};

export default Home;
