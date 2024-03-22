import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Movie = () => {
  const { type } = useParams();
  const { movieId } = useParams();
  let iframeUrl = "";
  if (type === "movie") {
    iframeUrl = "https://vidsrc.to/embed/movie/" + movieId;
  } else {
    iframeUrl = "https://vidsrc.to/embed/tv/" + movieId;
  }
  console.log(useParams());
  console.log(type);
  console.log(iframeUrl);
  return (
    <>
      <Navbar/>
      <div className="flex justify-center m-10">
        <iframe
          src={iframeUrl}
          width="720"
          height="480"
          allowFullScreen="True"
          title="Watch Now"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Movie;
