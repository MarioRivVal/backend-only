// -----------------------------------------------------------------//
// -----------------------------------------------------------------//
import express from "express";
import checkAuth from "../middleware/authMiddleware.js";
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

// PRIVATE AREA
userRoutes.get("/user-profile", checkAuth, userProfile);

export default userRoutes;
