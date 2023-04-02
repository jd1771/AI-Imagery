import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import banner from "./assets/banner.jpg";

import CreatePost from "./pages/Post";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <header className="flex w-full items-center justify-between border-b border-b-[#e6ebf4] bg-white px-4 py-4 sm:px-8">
        <Link to="/AI-Imagery">
          <img src={banner} alt="banner" className="w-[175px] object-contain" />
        </Link>

        <Link
          to="/create"
          className="font-inter rounded-md bg-[#6469ff] px-4 py-2 font-medium text-white"
        >
          Create
        </Link>
      </header>
      <main className="min-h-[calc(100vh-73px)] w-full bg-[#f9fafe] px-4 py-8 sm:p-8">
        <Routes>
          <Route path="/AI-Imagery" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
