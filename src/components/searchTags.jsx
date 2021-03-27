import React from "react";
import "../App.css";
import { useState } from "react";

export default function SearchTags() {
  const [tags] = useState([
    "1 tag",
    "2 tag",
    "3 tag",
    "4 tag",
    "4 tag",
    "4 tag",
    "4 tag",
    "4 tag",
  ]);
  const n = 6;
  const maxArray = tags.slice(0, n);
  console.log(maxArray);

  if (tags.length <= 6) {
    return (
      <div className="row">
        <div className="offset-1 col-10">
          <label>POPULAR SEARCH TAGS</label>
          <div className="tag-container">
            {tags.map((tag, index) => {
              return (
                <div key={index} className="tag">
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (tags.length > 6) {
    return (
      <div className="row">
        <div className="offset-1 col-10">
          <label> POPULAR SEARCH TAGS</label>
          <div className="tag-container">
            {maxArray.map((maxArray, index) => {
              return (
                <>
                  <div key={index} className="tag">
                    {maxArray} else
                  </div>
                </>
              );
            })}{" "}
            <div className="tag-load-more">Load More </div>
          </div>
        </div>
      </div>
    );
  }
}
