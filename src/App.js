import './App.css';
import Search from './components/search';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import Details from './components/details'

function App() {
  return (
    <>
      <div className="container justify-content-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search path="home"/>} />
            <Route path="/:type/:movieId" element={<Details/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
