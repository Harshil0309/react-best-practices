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

  return <div>{movieId}</div>;
}

export default MovieDetails;
