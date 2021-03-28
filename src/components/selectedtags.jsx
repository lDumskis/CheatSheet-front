import React, { useContext } from "react";
import SearchContext from "./../context/searchContext";
import Tag from "./Tag";

const Selectedtags = () => {
  const { sTags, setSTAgs } = useContext(SearchContext);
  return (
    <div className="row mb-4">
      <div className="tag-container">
        {sTags
          .filter((item, index) => sTags.indexOf(item) === index)
          .map((tag) => (
            <Tag name={tag} tags={sTags} setTags={setSTAgs} remove="true" />
          ))}
      </div>
    </div>
  );
};

export default Selectedtags;
