import { useState } from "react";
//import { from } from "rxjs";
import "./App.css";
import serchIcon from "./icons/search.svg";
import MovieCard from "./MovieCard";
import Header from "./Header";
import Preloader from "./Preloader";

//bbc88e70
const apiUrl = "https://www.omdbapi.com?apikey=bbc88e70";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  // Fetch movies from the API Using subscribe(Observable)
  // const searchMovies = (search) => {
  //   const fetchObservable = from(fetch(`${apiUrl}&s=${search}`).then(response => response.json()));

  //   fetchObservable.subscribe({
  //     next: (data) => {
  //       if (data && data.Search) {
  //         console.log("Observable:", data.Search);
  //       } else {
  //         console.error("No movies found");
  //       }
  //     },
  //     error: (error) => console.error("Error fetching data:", error),
  //   });
  // };

  // Fetch movies from the API Using async/await(Promise)
  const searchMovies = async (search) => {
    try {
      const Preloader = document.getElementById("preLoader");
      Preloader.classList.add("show");
      const response = await fetch(`${apiUrl}&s=${search}`);
      const data = await response.json();
      if (data && data.Search) {
        setMovies(data.Search);
      } else {
      }
      setTimeout(() => {
        Preloader.classList.remove("show");
      }, 1000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main>
      <Header />
      <div className="container">
        <div className="hero">
          <h1>movies library</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
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
            <h2>No movies found please search for another</h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
