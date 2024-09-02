// -----------------------------------------------------------------//
// -----------------------------------------------------------------//
import express from "express";
import {
  registerNewUser,
  userProfile,
} from "../controllers/userControllers.js";
// -----------------------------------------------------------------//
// -----------------------------------------------------------------//

const userRoutes = express.Router();

// PUBLIC AREA
userRoutes.post("/", registerNewUser);
userRoutes.get("/user-profile", userProfile);

export default userRoutes;
