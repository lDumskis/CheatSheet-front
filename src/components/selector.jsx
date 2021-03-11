import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

const Selector = ({ onSelect }) => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [client, setClient] = useState("");

  useEffect(() => {
    axios("http://localhost:8000/api/questions").then(function (response) {
      if (client !== "" && category !== "") {
        setQuestions(
          response.data.objects.filter(
            (obj) => obj.client === client && obj.category === category
          )
        );
      } else if (client !== "" && category === "") {
        setQuestions(
          response.data.objects.filter((obj) => obj.client === client)
        );
      } else if (client === "" && category !== "") {
        setQuestions(
          response.data.objects.filter((obj) => obj.category === category)
        );
      } else {
        setQuestions(response.data.objects);
      }
    });
  }, [category, client]);

  function onCategory(category) {
    setCategory(category);
  }
  function onClient(client) {
    setClient(client);
  }

  return <React.Fragment>Selector</React.Fragment>;
};

export default Selector;
