import React, { useState, useEffect } from "react";
import Result from "./Result";
import { Pagination } from '@mui/material'

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState(1);
  // const navigate = useNavigate()
  const omdb_api = import.meta.env.VITE_APP_OMDB_API;
  // const tmdb_api = import.meta.env.VITE_APP_TMDB_API;
  const handleOnChange = (event) => {
    setSearchText(event.target.value);
  };

  const fetchData = async (event, param) => {
    console.log(page)
    console.log(param)
    const omdbUrl = `https://www.omdbapi.com/?s=${searchText.trim()}&apikey=${omdb_api}&page=${page}`;
    console.log(omdbUrl)
    // const tmdbUrl = `https://api.themoviedb.org/3/search/movie?query=${searchText.trim()}&api_key=${tmdb_api}`;
    const response = await fetch(omdbUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setMovies(data.Search || []);
      movies.length === 10 ? setHasMore(true): setHasMore(false)
      setPage((prePage) => prePage + 1)
    }
  };

 
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  return (
    <>
      <div className="text-5xl font-semibold py-10 text-green-700 font-outline-2 flex justify-center item-center">
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
            <Result
              key={index}
              title={movie.Title}
              imageUrl={movie.Poster}
              year={movie.Year}
              movieId={movie.imdbID}
              type={movie.Type}
              // type="movie"
            />
        ))}
      </div>
      {/* <div className="flex justify-center p-12">
          { 
          <Pagination color="primary" shape="rounded" count={10} onChange={fetchData()}></Pagination>
          }
        </div> */}

    </>
  );
};

export default Search;
