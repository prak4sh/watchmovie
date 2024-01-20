import React, {useState} from 'react'   
import Result from './result.js'
import { useNavigate } from 'react-router-dom'
import './search.css'

const Search = ({path}) => {
    const [searchText, setSearchText] = useState('')
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const omdb_api = process.env.REACT_APP_OMDB_API;


    const handleOnChange = (event) => {
        setSearchText(event.target.value)
    }

    const fetchData = async(event, param) => {
        navigate('/')
        const response = await fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=${omdb_api}&page=${page}`)
        if (response.ok){
            const data = await response.json();
            setMovies(data.Search || [])

        }
    }
    return (
        <>
            <div className="row my-5">
            <div className="col-sm-md-6 mx-auto">
                <div className="input-group mb-3">
                <input type="text" className="form-control input-text mr-sm-1" placeholder="Search Movies or Series...." aria-label="Search" onChange={handleOnChange} value={searchText}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-warning my-sm-0" type="button" onClick={fetchData}><i className="fa fa-search"></i></button>
                </div>
                </div>
            </div>       
            </div>
            <div className='row'>

            {   path === "home" && 
                movies.map((movie, index) => (
                    <Result key={index} title={movie.Title} imageUrl={movie.Poster} year={movie.Year} movieId={movie.imdbID} type={movie.Type}/>
                ))
            }
            </div>
            { movies.length > 9 && 
                <div className="pagination-buttons">
                    <button className="button prev-button" onClick={event=>fetchData(setPage(page - 1))}>Previous Page</button>
                    <button className="button prev-button" onClick={event=>fetchData(setPage(page + 1))}>Next Page</button>
                </div>
            }
            <div className='text-center text-info my-3'>
                <p><u>Use Brave Browser for better experience.</u></p> 
            </div>
        </>
    );
}

export default Search;