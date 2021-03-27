import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

export default function SearchTags() {
  const [tags, setTags] = useState([]);
  const [visible, setVisible] = useState(6);
  const [selectedTags, setSelected] = useState([]);

  const loadMoreTags = () => {
    setVisible(visible + 24);
  };
  const loadAllTags = () => {
    setVisible(tags.length);
  };
  const selectedItem = (data) => {
    console.log(data);
  }

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
              <div className="tag" >{item.tag}</div>
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
              <div onClick={selectedItem} className="tag">{item.tag}</div>
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
              <div className="tag">{item.tag}</div>
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
            <div className="tag">{item.tag}</div>
          ))}
        </div>
      </div>
    );
  }
}
