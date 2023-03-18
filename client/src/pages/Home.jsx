import React, { useState, useEffect } from "react";

import Loader from "../components/Loader";
import Card from "../components/Card";
import FormField from "../components/FormField";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className="max-w-7xl mx-auto mt-16">
      <div>
        <h1 className="font-extrabold text-[#222328] text-3xl">
          AI Image Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-5l max-w-[500px]">
          Explore through a series of AI generated images
        </p>
      </div>
    </section>
  );
};

export default Home;
