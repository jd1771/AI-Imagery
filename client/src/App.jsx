import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import logo from "./assets/logo.png";

import CreatePost from "./pages/Post";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <header className="flex w-full items-center justify-between border-b border-b-[#e6ebf4] bg-white px-4 py-4 sm:px-8">
        <Link
          to="/AI-Imagery"
          className="flex items-center justify-center border-2 "
        >
          <img src={logo} alt="logo" className="w-[100px]" />
          <span className="ml-2 text-2xl font-extrabold text-[#222328]">
            Imagery
          </span>
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
