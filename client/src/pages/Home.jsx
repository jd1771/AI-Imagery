import React, { useState, useEffect } from "react";

import Loader from "../components/Loader";
import Card from "../components/Card";
import FormField from "../components/FormField";

const RenderCards = ({ data, title }) => {
  // Return cards if posts is not empty
  if (data && data.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  // Return error text if no posts found
  return (
    <h2 className="mt-5 text-xl font-bold uppercase text-[#6469ff]">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="mx-auto mt-16 max-w-7xl">
      <div>
        <h1 className="text-3xl font-extrabold text-[#222328]">
          AI Image Showcase
        </h1>
        <p className="text-5l mt-2 max-w-[500px] text-[#666e75]">
          Explore through a series of stunning AI generated images powered by
          DALL-E
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-16">
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div>
            {searchText && (
              <h2 className="mb-3 text-xl font-medium text-[#666e75]">
                Showing Resuls for{" "}
                <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}

            <div className="sm:grid-col-2 grid gap-3 lg:grid-cols-4">
              {searchText ? (
                <RenderCards data={allPosts} title="No search results found" />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
