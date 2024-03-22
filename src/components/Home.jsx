import React from 'react';
import Navbar from "./Navbar";
import Search from "./Search";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
          <div className="bg-slate-200 min-h-screen">
            <Navbar />
            <div className="items-center md:m-8 m-4">
              <Search />
              
            </div>
            <Footer />
          </div>
        </>
    )
}

export default Home