import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Selector from "./components/selector";
import AnswerField from "./components/answerField";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function App() {
  const [answer, setAnswer] = useState();

  function handleSelect(selected, category) {
    axios("http://localhost:8000/api/answers/" + selected).then(function (
      response
    ) {
      setAnswer(response.data);
      // handle success
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron fluid>
          <Container>
            <p>, that is the question:</p>
            <i className="float-right">(from Hamlet, spoken by Hamlet)</i>
            <br />
            <i className="float-right">Maybe</i>
          </Container>
        </Jumbotron>
      </header>
      <div className="container">
        <Selector onSelect={handleSelect} />
        <AnswerField answer={answer} />
      </div>
    </div>
  );
}

export default App;
