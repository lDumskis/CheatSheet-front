import React from "react";
import "./App.css";
import Header from "./components/header";
import TextFields from "./components/common/TextFields";

function App() {
  return (
    <>
      <div className="container-fluid p-2">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="offset-1 col-10">
            <div className="row">
              <TextFields />
              <TextFields />
              <TextFields />
              <TextFields />
              <TextFields />
              <TextFields />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
