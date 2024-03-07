import express from "express";
import weatherRouter from "./routes/weatherRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

//middlewares
app.use(express.json());

// routes
app.use("/api/weather", weatherRouter);

// listening to server
app.listen(process.env.PORT, () => {
  console.log(`Listening to the port ${process.env.PORT}`);
});
