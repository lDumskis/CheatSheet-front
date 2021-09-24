import React, { useState, useContext } from "react";
import "../../../App.css";
import SearchContext from "../../../context/SearchContext";
import Tag from "../../common/Tag";

export default function TagsSelector() {
  const { setSTAgs, sTags, tags } = useContext(SearchContext);
  const [visible, setVisible] = useState(12);

  const loadMoreTags = () => {
    setVisible(visible + 20);
    console.log(visible);
  };
  const loadAllTags = () => {
    setVisible(tags.length);
    console.log(visible);
  };

  if (visible < 5) {
    return (
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
    );
  } else if (visible === 12) {
    return (
      <div className="offset-1 col10 testing">
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
    );
  } else if (visible <= 32) {
    return (
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
          <button onClick={() => setVisible(12)} className="tag-load-more">
          Reduce &gt;
        </button>
        </div>
      </div>
    );
  }
}
