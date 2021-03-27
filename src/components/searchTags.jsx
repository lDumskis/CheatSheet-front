import React from "react";
import "../App.css";
import { useState, useEffect, Component } from "react";
import btnVisiblityToggler from "./visibilityToggle";

export default function SearchTags() {
  const [tags, setTags] = useState([]);
  const [visible, setVisible] = useState(6);

  const loadMoreTags = () => {
    setVisible((prevValue) => prevValue + 24);
  };
  const loadAllTags = () => {
    setVisible((prevValue) => prevValue + tags.length - prevValue);
  };

  useEffect(() => {
    fetch("https://wtdback.qa.bazaarvoice.com/api/tags")
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  if (visible > 5){
    return (
    <div className="row">
        <div className="offset-1 col10">
          <label>POPULAR SEARCH TAGS</label>
          <div className="tag-container">
            {tags.slice(0, visible).map((item) => (
              <div className="tag">{item.tag}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  else if (visible === 6) {
    return (
      <div className="row">
        <div className="offset-1 col10">
          <label>POPULAR SEARCH TAGS</label>
          <div className="tag-container">
            {tags.slice(0, visible).map((item) => (
              <div className="tag">{item.tag}</div>
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
              <div className="tag">{item.title}</div>
            ))}
            <button onClick={loadMoreTags} className="tag-load-more">
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
            <div className="tag">{item.title}</div>
          ))}
          <button onClick={loadMoreTags} className="tag-load-more">
            Load More &gt;
          </button>
          <button onClick={loadAllTags} className="tag-load-more" id="loadAllTags">
            Load All Tags &darr;
          </button>
        </div>
      </div>
    );
  }
}
