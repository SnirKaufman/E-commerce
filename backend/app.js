import express from "express";
import connectDB from "./db/connect.js";
import "dotenv/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use("/", router);

app.use(cookieParser());

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
