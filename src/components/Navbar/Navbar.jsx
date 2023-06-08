import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { removeSpacesAddPlus } from "../../utils/url-parsing";
import { removePlusAddSpaces } from "../../utils/url-parsing";
function Navbar() {
  const navigate = useNavigate();

  const { pathname, search } = useLocation();

  const [searchTerm, setSearchTerm] = useState(() => {
    if (pathname != "/search") return "";
    // const queryArr = search.slice(1).split("&")[0].split("=");
    // if (queryArr[0] == "search_query") {
    //   return removePlusAddSpaces(queryArr[1]);
    // }
    // return "";
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get("search_query");
    return query;
  });

  const handleOnEnter = (e) => {
    if (e.keyCode != 13 || searchTerm == "") {
      return;
    }
    const processedSearchTerm = removeSpacesAddPlus(searchTerm);
    const newURL = `/search?search_query=${processedSearchTerm}`;
    navigate(newURL);
  };

  return (
    <div>
      <div>
        <Link to="/">Logo</Link>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => handleOnEnter(e)}
        />
      </div>
    </div>
  );
}

export default Navbar;
