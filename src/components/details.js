// MovieDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Search from './search';

const Details = () => {
  const { movieId } = useParams();
  const {type} = useParams();
  let iframeUrl = ''
  if (type === 'movie'){
    iframeUrl = 'https://vidsrc.to/embed/movie/' + movieId
  }
  else {
    iframeUrl = 'https://vidsrc.to/embed/tv/' + movieId
  }


  // Fetch movie details using movieId and display them

  return (
    <>
        <Search path='details'/>
        <iframe src={iframeUrl} width="720" height="480" frameborder="0" allowfullscreen='True' title='Watch Now'></iframe>
    </>
  );
};

export default Details;
