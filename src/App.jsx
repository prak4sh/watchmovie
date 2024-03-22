import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:type/:movieId" element={<Movie/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics/>
    </>
  );
}

export default App;
