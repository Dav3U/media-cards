import React from "react";

const MediaCard = ({ movie }) => {
  const handleClick = () => {
    window.open("www.imdb.com/title/" + movie.imdbID);
  };

  return (
    <div className="movie" onClick={handleClick}>
      <div>
        <p>{movie.Year}</p>
        {
          // console.log("www.imdb.com/title/"+movie.imdbID)
        }
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span> {movie.Type} </span>
        <h3> {movie.Title} </h3>
      </div>
    </div>
  );
};
export default MediaCard;
