import React, { useState, useEffect } from "react";
import SearchContext from "./context/searchContext";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import SingleArticlePage from "./components/SingleArticlePage";
import ArticleRequest from "./components/ArticleRequest";
import SubmitArticle from "./components/SubmitArticle";
import Home from "./components/Home";
import AllView from "./components/AllView";

function App() {
  const baseURL = "https://wtdback.qa.bazaarvoice.com/api/";
  const [articles, setArticles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [sTags, setSTAgs] = useState([]);

  useEffect(() => {
    getAllArticles();
  }, []);

  const getAllArticles = () => {
    axios.get(baseURL).then((response) => {
      setArticles(response.data);
      setResult(response.data);
    });
  };
  //Tags field
  useEffect(() => {
    let newArray = [];
    articles.forEach((element) => {
      element.t.forEach((tags) => {
        if (sTags.includes(tags.tag)) {
          newArray.push(element);
        }
      });
    });
    sTags.length < 1 ? setFiltered(articles) : setFiltered(newArray);
  }, [sTags]);
  //Search Field
  useEffect(() => {
    let newArticles = filtered.filter(
      (article) =>
        (article.title &&
          article.title.toLowerCase().includes(search.toLowerCase())) ||
        (article.q && article.q.toLowerCase().includes(search.toLowerCase()))
    );

    setResult(newArticles);
  }, [search, filtered]);

  return (
    <SearchContext.Provider
      value={{
        articles: articles,
        setArticles: setArticles,
        result: result,
        setResult: setResult,
        sTags: sTags,
        setSTAgs: setSTAgs,
        search: search,
        setSearch: setSearch,
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
            <div className="row mainPageBg">
              <Switch>
                <Route path="/request">
                  <ArticleRequest />
                </Route>
                <Route path="/all">
                  <AllView result={result} />
                </Route>
                <Route path="/article/:id">
                  <SingleArticlePage />
                </Route>
                <Route path="/submit">
                  <SubmitArticle />
                </Route>
                <Route exact path="/">
                  <Home result={result} />
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
