import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieItem({ movieDetails }) {
  const { title: movieName, poster_path: posterUrl, id } = movieDetails;
  return (
    <div>
      <Link to={`/movie?movie_id=${id}`}>
        <img src={`https://image.tmdb.org/t/p/w185/${posterUrl}`} />
        <h5>{movieName}</h5>
      </Link>
    </div>
  );
}

export default MovieItem;
