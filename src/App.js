import { useState, useEffect } from "react";
import { first, from } from "rxjs";
import "./App.css";
import serchIcon from "./icons/search.svg";
import MovieCard from "./MovieCard";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import Preloader from "./Preloader";
import i18n from "./utils/i18n";
import "./utils/i18n";

//bbc88e70
const apiUrl = "https://www.omdbapi.com?apikey=bbc88e70";
const App = () => {
  const { t } = useTranslation();
  const [firstTime, setFirstTime] = useState(true);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");

  // Fetch movies from the API Using subscribe(Observable)
  // const getMovies = () => {
  //   const fetchObservable = from(fetch(apiUrl).then(response => response.json()));
  //   fetchObservable.subscribe({
  //     next: (data) => {
  //         console.log("Observable:", data);
  //     },
  //     error: (error) => console.error(t("errorFetchingData"), error),
  //   });
  // };

  // Search for movies from the API Using async/await(Promise)
  const searchMovies = async (search) => {
    setFirstTime(false);
    const Preloader = document.getElementById("preLoader");
    Preloader.classList.add("show");
    try {
      const response = await fetch(`${apiUrl}&s=${search}`);
      const data = await response.json();
      if (data && data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(t("errorFetchingData"), error);
    }
    setTimeout(() => {
      Preloader.classList.remove("show");
    }, 1000);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
  }

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    if (language === "en") {
      document.querySelector("html")?.setAttribute("lang", "en");
      document.querySelector("html")?.setAttribute("dir", "ltr");
      inputs.forEach((input) => {
        input.setAttribute("dir", "ltr");
      });
    } else if (language === "ar") {
      document.querySelector("html")?.setAttribute("lang", "ar");
      document.querySelector("html")?.setAttribute("dir", "rtl");
      inputs.forEach((input) => {
        input.setAttribute("dir", "rtl");
      });
    }
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <main>
      <Header onDataChange={handleLanguageChange} />
      <div className="container">
        <div className="hero">
          <h1>{t("title")}</h1>
          <div className="search">
            <input
              type="text"
              placeholder={t("search")}
              value={search}
              onKeyDown={(evt) => {
                if (evt.key === "Enter") {
                  searchMovies(search);
                }
              }}
              onChange={(evt) => {
                setSearch(evt.target.value);
              }}
            />
            <button onClick={() => searchMovies(search)}>
              <img src={serchIcon} alt="search" />
            </button>
          </div>
        </div>
        <div className="movies">
          <Preloader />
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard movie={movie} />)
          ) : (
            firstTime ?<h2>{t("searchForMovies")}</h2> : <h2>{t("noMoviesFound")}</h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
