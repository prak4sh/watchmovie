import React from "react";
import {Link} from "react-router-dom";

const Result = ({ title, year, imageUrl, movieId, type }) => {
  return (
    <Link to={`/${type}/${movieId}`}>
      <div
        className="relative bg-cover md:h-64 h-64 m-2 rounded-xl border shadow-md hover:shadow-2xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="flex flex-col items-center justify-center bg-black opacity-90 rounded-b-xl absolute inset-x-0 bottom-0 content-end h-20">
          <div className="text-white text-l text-center font-bold">{title}</div>
          <div className="text-white text-sm ">Year: {year}</div>
        </div>
      </div>
    </Link>
  );
};

export default Result;
