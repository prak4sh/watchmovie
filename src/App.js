import './App.css';
import Search from './components/search';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import Details from './components/details'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights/>
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
