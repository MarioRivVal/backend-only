// -----------------------------------------------------------------//
// -----------------------------------------------------------------//
import express from "express";
import dotenv from "dotenv";
import dataBaseConnection from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// -----------------------------------------------------------------//
// -----------------------------------------------------------------//
// Create a Express instance
const app = express();
// // Enables the app to handle and parse JSON data in HTTP request bodies (e.g., POST requests).
app.use(express.json());
// Load the environment variables from .env file
dotenv.config();
// Call the connection to the MongoDB
dataBaseConnection();

app.use("/api/users", userRoutes);

// // Configures the port and starts the server.
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});
