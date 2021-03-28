import React, { useState, useEffect } from "react";
import SearchContext from "./context/searchContext";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Header from "./components/header";
import TextFields from "./components/common/TextFields";
import SingleArticlePage from "./components/SingleArticlePage";
import ArticleRequest from "./components/ArticleRequest";
import Selectedtags from "./components/selectedtags";
import SubArticle from "./components/subArticle"

function App() {
  const baseURL = "https://wtdback.qa.bazaarvoice.com/api/";
  const [articles, setArticles] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    getAllArticles();
  }, []);

  const getAllArticles = () => {
    axios.get(baseURL).then((response) => {
      setArticles(response.data);
      setResult(response.data);
    });
  };

  return (
    <SearchContext.Provider
      value={{
        articles: articles,
        setArticles: setArticles,
        result: result,
        setResult: setResult,
      }}
    >
      <div className="container-fluid p-2">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="offset-1 col-10">
            <Selectedtags />
            <div className="row">
              <Switch>
                <Route path="/request">
                  <ArticleRequest />
                </Route>
                <Route path="/article/:id">
                  <SingleArticlePage />
                </Route>
                <Route path="/subArticle">
                  <SubArticle />
                </Route>
                <Route exact path="/">
                  {result.map((article) => (
                    <TextFields info={article} />
                  ))}
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
