import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
function MovieDetails() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const movieId = searchParams.get("movie_id");

  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    const fetch = async () => {
      try {
        const data = await axios(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDdkMzcwNDVmZmY0M2ZkZDdiNmU2ZGJjYTY5Nzc0MSIsInN1YiI6IjYyYzViOGI4ZTg2MDE3MDBkMmU1YjhkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STosxagdr6iiV_JiUuqY9IVf57n1I2C4yhfqz8iXfjU",
            },
          }
        );
        setMovieData(data.data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [movieId]);

  if (isError) {
    return <Error message={isError} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  console.log(movieData);

  const {
    adult,
    original_title,
    overview,
    popularity,
    poster_path,
    runtime,

    genres,
  } = movieData;

  return (
    <div>
      <h3>{original_title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
        alt="Not available"
      />
      <p>{overview}</p>
      <br />
      <p>Adult : {adult == true ? "True" : "False"}</p>
      <p>Runtime : {runtime}min</p>
      <p>Popularity : {popularity}</p>
      <div>
        Genres :
        {genres.map((item) => {
          return <span>{item.name} </span>;
        })}
      </div>
      <p></p>
    </div>
  );
}

export default MovieDetails;

// dult
// :
// false
// backdrop_path
// :
// "/2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg"
// belongs_to_collection
// :
// {id: 9485, name: 'The Fast and the Furious Collection', poster_path: '/vEq10ZynOwHaSIIQ3mWohbHzvRb.jpg', backdrop_path: '/z5A5W3WYJc3UVEWljSGwdjDgQ0j.jpg'}
// budget
// :
// 340000000
// genres
// :
// (3) [{…}, {…}, {…}]
// homepage
// :
// "https://fastxmovie.com"
// id
// :
// 385687
// imdb_id
// :
// "tt5433140"
// original_language
// :
// "en"
// original_title
// :
// "Fast X"
// overview
// :
// "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever."
// popularity
// :
// 5973.909
// poster_path
// :
// "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
// production_companies
// :
// (4) [{…}, {…}, {…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2023-05-17"
// revenue
// :
// 652000000
// runtime
// :
// 142
// spoken_languages
// :
// (4) [{…}, {…}, {…}, {…}]
// status
// :
// "Released"
// tagline
// :
// "The end of the road begins."
// title
// :
// "Fast X"
// video
// :
// false
// vote_average
// :
// 7.362
// vote_count
// :
// 1309
// [[Prototype]]
// :
// Object
