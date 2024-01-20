import React from "react"
import './result.css'
import { Link } from 'react-router-dom';

const Result = ({ title, year, imageUrl, movieId, type}) => {
    return (
        <Link to={`/${type}/${movieId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="movie-card">
                <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}>
                </div>
                <div className="card-content">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-type">{type}</p>
                <p className="movie-year">Year: {year}</p>
                </div>
            </div>
        </Link>
    );
  };

export default Result