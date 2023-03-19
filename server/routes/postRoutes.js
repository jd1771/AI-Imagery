import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongo/models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch post",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const result = await cloudinary.uploader.upload(photo);
    const post = await Post.create({
      name,
      prompt,
      photo: result.url,
    });

    res.status(201).json({ success: true, data: post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
