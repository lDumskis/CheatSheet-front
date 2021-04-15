import React from "react";

const LinkInput = ({ links, setLinks }) => {
  function handleChange(i, e) {
    let newLinks = [...links];
    const { value } = e.target;
    newLinks[i] = value;
    setLinks(newLinks);
    console.log(links);
  }

  function handleNewField() {
    let newLinks = [...links];
    newLinks.push("");
    setLinks(newLinks);
  }

  return links.map((link, idx) => (
    <div key={idx} className="input-group pasteFields mt-1">
      <span
        onClick={() => handleNewField()}
        className="input-group-text pastePlusSection"
      >
        +
      </span>
      <input
        type="text"
        className="pasteField form-control"
        placeholder="Link to extra knowledge"
        aria-label="knowledgeLink"
        aria-describedby="knowledgeLink"
        value={link}
        onChange={(e) => handleChange(idx, e)}
      />
    </div>
  ));
};

export default LinkInput;
