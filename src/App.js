// import React from 'react';
/* jshint esversion: 6 */
import { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import "./App.css";
import SearchIcon from "./search.svg";

//63a3e8dd

const API_URL = "https://www.omdbapi.com?apikey=63a3e8dd";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState(searchTerm);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  // debouncer to delay the searchMovies function for 1 second
  useEffect(() => {
    const timerFn = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerFn);
    };
  }, [searchTerm]);

  //
  useEffect(() => {
    // searchTerm = "Latest Movies"
    if (!debounceTerm) {
      console.log("i search transformers");
      searchMovies("Transformers");
    }
    if (debounceTerm) {
      console.log("i search ", debounceTerm);
      searchMovies(debounceTerm);
    }
    // searchMovies(debounceTerm);
  }, [debounceTerm]);

  return (
    <div className="app">
      <h1>
        Dave's Media Hub
        <img src={require("./popcorn.png")} alt="popcorn" width={"50rem"} />
      </h1>
      <i>limitless surfing!</i>

      <div className="search">
        <input
          placeholder="enter a title"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <img
          src={SearchIcon}
          alt="Search"
          // onClick= {
          // ()=> searchMovies(searchTerm)
          // }
        />
      </div>
      {/* list  */}
      {movies && movies.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => (
            <MediaCard key={i} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> There are no movies found, please re-enter search term </h2>
        </div>
      )}
    </div>
  );
};

export default App;
