import React, { useState } from "react";
import Result from "./Result";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const navigate = useNavigate()
  const omdb_api = import.meta.env.VITE_APP_OMDB_API;
  const handleOnChange = (event) => {
    setSearchText(event.target.value);
  };
  const fetchData = async (event, param) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchText.trim()}&apikey=${omdb_api}&page=${page}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setMovies(data.Search || []);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };
  return (
    <>
      <div className="text-5xl font-semibold py-10 text-green-600 font-outline-2 flex justify-center item-center">
        Search Movies or Series
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-stretch md:w-2/4 w-full rounded-full">
          <input
            type="text"
            className="px-4 py-3 border shadow border-green-900 w-full rounded-l-full focus:outline-none focus:border-blue-500"
            placeholder="Search movies or series..."
            value={searchText}
            onChange={handleOnChange}
            onKeyDown={handleKeyPress}
          />
          <button
            type="button"
            onClick={fetchData}
            className="py-2 px-5 bg-green-800 text-white rounded-r-full hover:bg-green-900 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="pt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
      {movies.map((movie, index) => (
          <div className="">
            <Result
              key={index}
              title={movie.Title}
              imageUrl={movie.Poster}
              year={movie.Year}
              movieId={movie.imdbID}
              type={movie.Type}
            />
          </div>
        
      ))};
      </div>

    </>
  );
};

export default Search;
