// -----------------------------------------------------------------//
// -----------------------------------------------------------------//
import express from "express";
import checkAuth from "../middleware/authMiddleware.js";
import {
  registerNewUser,
  userProfile,
  userConfirmation,
  userLogin,
  forgotPassword,
  tokenConfirmation,
  newPassword,
} from "../controllers/userControllers.js";
// -----------------------------------------------------------------//
// -----------------------------------------------------------------//

const userRoutes = express.Router();

// PUBLIC AREA
userRoutes.post("/", registerNewUser);
userRoutes.post("/user-login", userLogin);
userRoutes.get("/user-confirmation/:token", userConfirmation);
userRoutes.post("/forgot-password", forgotPassword);
userRoutes
  .route("/forgot-password/:token")
  .get(tokenConfirmation)
  .post(newPassword);

// PRIVATE AREA
userRoutes.get("/user-profile", checkAuth, userProfile);

export default userRoutes;
