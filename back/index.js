import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDB } from "./src/lib/db.js";

dotenv.config();

connectDB();

export default app;
