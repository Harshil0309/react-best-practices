import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

import Loading from "../../components/Loading/Loading";
import MovieItem from "../../components/MovieItem/MovieItem";
import Error from "../../components/Error/Error";

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
