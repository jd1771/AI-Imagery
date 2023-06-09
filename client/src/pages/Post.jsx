import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../components/Loader";
import FormField from "../components/FormField";
import preview from "../assets/preview.png";

/*
 * Post page where the user can create a new post
 * to share with the world
 */
const Post = () => {
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  /*
   * Function that is used Handle
   * changes that the user makes to the form
   */
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /*
   * Handle form submit.
   * This function will be called when the user clicks on the submit button
   * It will send a POST request to the API endpoint with the form data
   * If the request is successful, it will redirect the user to the home page
   * If the request fails, it will display an error message
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch(
          `https://ai-imagery-4gzw.onrender.com/api/posts`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        await response.json();
        navigate("/");
      } catch (error) {
        console.log(error);
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("please enter a prompt and generate an image");
    }
  };

  /*
   * Generate an image using the prompt entered by the user
   * This function will be called when the user clicks on the generate image button
   * It will send a POST request to the API endpoint with the prompt
   */
  const generateImg = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          `https://ai-imagery-4gzw.onrender.com/api/dalle`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: form.prompt }),
          }
        );

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt");
    }
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

          <div className="relative flex h-64 w-64 items-center justify-center rounded-md border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="h-full w-full object-contain"
              ></img>
            ) : (
              <img
                src={preview}
                alt="preview"
                className="h-9/12 w-9/12 object-contain opacity-40"
              ></img>
            )}

            {generatingImg && (
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[rgb(0,0,0,0)]">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImg}
            className=" w-auto rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75]">
            After generating an image, you can share it with the world!
          </p>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="mt-3 w-auto rounded-md bg-[#6469ff] px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            {loading ? "Sharing..." : "Share"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Post;
