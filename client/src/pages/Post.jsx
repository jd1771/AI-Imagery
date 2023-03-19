import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../components/Loader";
import FormField from "../components/FormField";

const Post = () => {
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="mx-auto max-w-7xl">
      <div>
        <h1 className="text-3xl font-extrabold text-[#222328]">
          Create a new image
        </h1>
        <p className="text-5l mt-2 max-w-[500px] text-[#666e75]">
          Create an AI generated image to share with the rest of the world
        </p>
      </div>

      <form className="mt-16 max-w-3xl">
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleFormChange}
          />

          <FormField
            labelName="Text Prompt"
            type="text"
            name="prompt"
            placeholder="A rubber ducky in the ocean"
            value={form.prompt}
            handleChange={handleFormChange}
          />

          <div className="relative flex h-64 w-64 items-center justify-center rounded-md border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"></div>
        </div>
      </form>
    </section>
  );
};

export default Post;
