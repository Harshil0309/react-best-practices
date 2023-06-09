import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Private from "./components/Private/Private";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie" element={<Private Component={MovieDetails} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
