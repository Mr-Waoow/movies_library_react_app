import React from "react";
import "./App.css";

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
      <div className="overlay">
        <span className="date">{movie.Year}</span>
      </div>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt="movie"
      />
      <div className="title">
        <h6>{movie.Type}</h6>
        <h5>{movie.Title}</h5>
      </div>
    </div>
  );
};

export default MovieCard;
