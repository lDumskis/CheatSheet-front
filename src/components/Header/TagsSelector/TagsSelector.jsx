import React, { useState, useContext, useEffect } from "react";
import "../../../App.css";
import SearchContext from "../../../context/SearchContext";
import Tag from "../../common/Tag";

export default function TagsSelector() {
  const { setSTAgs, sTags, tags } = useContext(SearchContext);
  const [visible, setVisible] = useState(6);


  const loadMoreTags = () => {
    setVisible(visible + 24);
  };
  const loadAllTags = () => {
    setVisible(tags.length);
  };

  if (visible < 5) {
    return (
      <div className="row">
        <div className="offset-1 col10">
          <label className="helvetica-bold popular-label">
            POPULAR SEARCH TAGS
          </label>
          <div className="tag-container">
            {tags.slice(0, visible).map((item) => (
              <Tag name={item.tag} setTags={setSTAgs} tags={sTags} />
            ))}
          </div>
        </div>
      </div>
    );
  } else if (visible === 6) {
    return (
      <div className="row">
        <div className="offset-1 col10">
          <label className="helvetica-bold popular-label">
            POPULAR SEARCH TAGS
          </label>
          <div className="tag-container">
            {tags.slice(0, visible).map((item) => (
              <Tag name={item.tag} setTags={setSTAgs} tags={sTags} />
            ))}
            <button onClick={loadMoreTags} className="tag-load-more">
              Load More &gt;
            </button>
          </div>
        </div>
      </div>
    );
  } else if (visible <= 30) {
    return (
      <div className="row">
        <div className="offset-1 col10">
          <label className="helvetica-bold popular-label">
            POPULAR SEARCH TAGS
          </label>
          <div className="tag-container">
            {tags.slice(0, visible).map((item) => (
              <Tag name={item.tag} setTags={setSTAgs} tags={sTags} />
            ))}
            <button onClick={loadAllTags} className="tag-load-more">
              Load More &gt;
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="offset-1 col10">
        <label className="helvetica-bold popular-label">
          POPULAR SEARCH TAGS
        </label>
        <div className="tag-container">
          {tags.slice(0, visible).map((item) => (
            <Tag name={item.tag} setTags={setSTAgs} tags={sTags} />
          ))}
        </div>
        <button onClick={() => setVisible(6)} className="tag-load-more">
          Reduce &gt;
        </button>
      </div>
    );
  }
}
