// -----------------------------------------------------------------//
// -----------------------------------------------------------------//
import express from "express";
import {
  registerNewUser,
  userProfile,
  userConfirmation,
  userLogin,
} from "../controllers/userControllers.js";
// -----------------------------------------------------------------//
// -----------------------------------------------------------------//

const userRoutes = express.Router();

// PUBLIC AREA
userRoutes.post("/", registerNewUser);
userRoutes.post("/user-login", userLogin);
userRoutes.get("/user-confirmation/:token", userConfirmation);
userRoutes.get("/user-profile", userProfile);

export default userRoutes;
