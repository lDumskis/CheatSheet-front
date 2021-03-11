import React from "react";

const AnswerField = ({ answer }) => {
  return (
    <React.Fragment>
      <div className="m-2">
        {answer && (
          <div>
            <h1>{answer.details}</h1>
            <p>{answer.name}</p>
          </div>
        )}
        {answer && answer.hasFile && (
          <button
            className="btn btn-primary"
            download={"http://localhost:8000" + answer.file}
          >
            Download the file&nbsp;&nbsp;
            <span role="img" aria-label="sheep">
              📁
            </span>
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default AnswerField;
