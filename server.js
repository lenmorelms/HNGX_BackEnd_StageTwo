import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import personRoute from "./Routes/PersonRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api", personRoute);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
