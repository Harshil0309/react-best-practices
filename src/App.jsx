import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Private from "./components/Private/Private";
import WatchLater from "./pages/WatchLater/WatchLater";
import Favourite from "./pages/Favourites/Favourite";
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
