import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongo/connect.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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

startServer();
