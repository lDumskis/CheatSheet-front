import React from "react";

const Tag = ({ name, setTags, tags, remove }) => {
  if (remove) {
    return (
      <div
        className="tag helvetica"
        onClick={() => setTags(tags.filter((tag) => tag !== name))}
      >
        {name}
      </div>
    );
  } else {
    return (
      <div className="tag helvetica" onClick={() => setTags([...tags, name])}>
        {name}
      </div>
    );
  }
};

export default Tag;
