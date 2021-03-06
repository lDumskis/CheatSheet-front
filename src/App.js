import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import SearchContext from "./context/SearchContext";
import Header from "./components/Header";
import SingleArticlePage from "./components/SingleArticlePage";
import ArticleRequest from "./components/ArticleRequest";
import SubmitArticle from "./components/SubmitArticle";
import Home from "./components/Home";
import AllView from "./components/AllView";
import Footer from "./components/Footer";
import SelectedTags from "./components/SelectedTags";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const baseURL = "https://wtdback.qa.bazaarvoice.com/api/";
  const [articles, setArticles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [sTags, setSTAgs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [tags, setTags] = useState([]);
  const [language, setLanguage] = useState("en");
  const [token, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    getAllArticles();
  }, []);

  const getAllArticles = () => {
    axios.get(baseURL).then((response) => {
      setArticles(response.data);
      setResult(response.data);
      setFiltered(response.data);
    });
  };
  useEffect(() => {
    const arrayToBe = [];
    articles.forEach((article) => article.t.forEach((t) => arrayToBe.push(t)));
    console.log(arrayToBe);
    console.log(articles);

    setTags(
      arrayToBe.filter((v, i, a) => a.findIndex((t) => t.tag === v.tag) === i)
    );
  }, [articles]);
  //Tags field
  useEffect(() => {
    console.log(tags);
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
        articles,
        setArticles,
        result,
        setResult,
        sTags,
        setSTAgs,
        search,
        setSearch,
        isAdmin,
        setIsAdmin,
        tags,
        setTags,
        language,
        setLanguage,
        token,
        setToken,
      }}
    >
      <div className="container-header p-2">
          <Header />
      </div>

      <div className="background">
        <div className="container-main">
          <div className="row mt-5 ">
            <div className="offset-1 col-10 ">
              <SelectedTags />
              <div className="row resultBoxArticle">
                <Switch>
                  <Route path="/request">
                    <ArticleRequest />
                  </Route>
                  <Route path="/all">
                    <AllView result={result} setResult={setResult} />
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
        <Footer />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
