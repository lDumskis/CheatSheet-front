import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import SearchContext from "./../context/searchContext";
import Tag from "./Tag";

export default function SearchTags() {
  const { setSTAgs, sTags } = useContext(SearchContext);
  const [tags, setTags] = useState([]);
  const [visible, setVisible] = useState(6);

  const loadMoreTags = () => {
    setVisible(visible + 24);
  };
  const loadAllTags = () => {
    setVisible(tags.length);
  };

  useEffect(() => {
    fetch("https://wtdback.qa.bazaarvoice.com/api/tags")
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  if (visible < 5) {
    return (
      <div className="row">
        <div className="offset-1 col10">
          <label>POPULAR SEARCH TAGS</label>
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
          <label>POPULAR SEARCH TAGS</label>
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
          <label>POPULAR SEARCH TAGS</label>
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
        <label>POPULAR SEARCH TAGS</label>
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
