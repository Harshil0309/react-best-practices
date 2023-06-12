import React, { useEffect, useState } from "react";
import { lazy } from "react";
import axios from "axios";
import "./Home.css";

const Loading = lazy(() => import("../../components/Loading/Loading"));
const MovieItem = lazy(() => import("../../components/MovieItem/MovieItem"));
const Error = lazy(() => import("../../components/Error/Error"));

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios(
          "https://api.themoviedb.org/3/movie/now_playing",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDdkMzcwNDVmZmY0M2ZkZDdiNmU2ZGJjYTY5Nzc0MSIsInN1YiI6IjYyYzViOGI4ZTg2MDE3MDBkMmU1YjhkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STosxagdr6iiV_JiUuqY9IVf57n1I2C4yhfqz8iXfjU",
            },
          }
        );
        setMovieList(data.data.results);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    setLoading(true);
    fetch();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      {movieList.map((item) => {
        return <MovieItem key={item.id} movieDetails={item} />;
      })}
    </div>
  );
}

export default Home;
