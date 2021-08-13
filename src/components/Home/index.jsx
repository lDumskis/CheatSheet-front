import React, { useState } from "react";
import TextFields from "../common/TextFields";

const Home = ({ result }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1 className="bv-blue-text text-align helvetica-bold">POPULAR TOPICS</h1>
      {result.map(
        (article) =>
          article.isPublished && (
            <TextFields info={article} setShowAlert={setShow} />
          )
      )}
      {show && (
        <div className="alert alert-primary copied-alert" role="alert">
          Text was officially Copied
        </div>
      )}
    </>
  );
};

export default Home;
