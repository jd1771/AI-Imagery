import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongo/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

// Load the express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/dalle", dalleRoutes);

// Default test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/*
 * Simple function used to Start the server
 */
const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URl);
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Start the server
startServer();
