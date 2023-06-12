import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Private = lazy(() => import("./components/Private/Private"));
const WatchLater = lazy(() => import("./pages/WatchLater/WatchLater"));
const Favourite = lazy(() => import("./pages/Favourites/Favourite"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Private Component={WatchLater} />} />
        <Route path="/favourite" element={<Private Component={Favourite} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
