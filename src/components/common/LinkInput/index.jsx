import React from "react";

const LinkInput = ({ links, setLinks }) => {
  return (
    <div className="input-group pasteFields mt-1">
      <span className="input-group-text pastePlusSection">+</span>
      <input
        type="text"
        className="pasteField form-control"
        placeholder="Link to extra knowledge"
        aria-label="knowledgeLink"
        aria-describedby="knowledgeLink"
      />
    </div>
  );
};

export default LinkInput;
