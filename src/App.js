import React, { useState, useEffect } from "react";
import SearchContext from "./context/searchContext";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import TextFields from "./components/common/TextFields";
import SingleArticlePage from "./components/SingleArticlePage";
import ArticleRequest from "./components/ArticleRequest";
import SelectedTags from "./components/SelectedTags";
import SubmitArticle from "./components/SubmitArticle";

function App() {
  const baseURL = "https://wtdback.qa.bazaarvoice.com/api/";
  const [articles, setArticles] = useState([]);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState();
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

  useEffect(() => {
    let newArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );

    setResult(newArticles);
  }, [search]);

  useEffect(() => {
    let newArray = [];
    articles.forEach((element) => {
      element.t.forEach((tags) => {
        if (sTags.includes(tags.tag)) {
          newArray.push(element);
        }
      });
    });
    console.log(sTags);
    sTags.length < 1 ? setResult(articles) : setResult(newArray);
  }, [sTags]);

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
                <Route path="/article/:id">
                  <SingleArticlePage />
                </Route>
                <Route path="/submit">
                  <SubmitArticle />
                </Route>
                <Route exact path="/">
                  <h1
                    className="center-h1 bv-blue-text
                  "
                  >
                    Popular topics
                  </h1>
                  <SelectedTags />
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
