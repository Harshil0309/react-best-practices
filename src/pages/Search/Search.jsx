import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import MovieItem from "../../components/MovieItem/MovieItem";

function Search() {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const movieName = searchParams.get("search_query");

  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    async function fetch() {
      try {
        const data = await axios(
          `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDdkMzcwNDVmZmY0M2ZkZDdiNmU2ZGJjYTY5Nzc0MSIsInN1YiI6IjYyYzViOGI4ZTg2MDE3MDBkMmU1YjhkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STosxagdr6iiV_JiUuqY9IVf57n1I2C4yhfqz8iXfjU",
            },
          }
        );
        if (data.data.results.length == 0) {
          throw { message: "No Movies Found" };
        }
        setMovieList(data.data.results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, [movieName]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={isError} />;
  }

  return (
    <div>
      <h3>Search Result For : {movieName}</h3>
      <div>
        {movieList.map((item) => {
          return <MovieItem movieDetails={item} />;
        })}
      </div>
    </div>
  );
}

export default Search;
