import React, { useState, useEffect } from "react";

import Loader from "../components/Loader";
import Card from "../components/Card";
import FormField from "../components/FormField";

const RenderCards = ({ data, title }) => {
  if (data.length > 0) return data.map((post) => <Card key={post._id} />);

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7xl mx-auto mt-16">
      <div>
        <h1 className="font-extrabold text-[#222328] text-3xl">
          AI Image Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-5l max-w-[500px]">
          Explore through a series of stunning AI generated images powered by
          DALL-E
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-16">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for{" "}
                <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}

            <div className="grid lg:grid-cols-4 sm:grid-col-2 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No search results found" />
              ) : (
                <RenderCards data={[]} title="No posts found" />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
