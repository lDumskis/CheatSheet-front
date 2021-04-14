import React from "react";
import SelectedTags from "../SelectedTags";
import TextFields from "../common/TextFields";

const Home = ({ result }) => {
  return (
    <>
      <h1 className="bv-blue-text text-align helvetica-bold">POPULAR TOPICS</h1>
      <SelectedTags />
      {result.map(
        (article) => article.isPublished && <TextFields info={article} />
      )}
    </>
  );
};

export default Home;
