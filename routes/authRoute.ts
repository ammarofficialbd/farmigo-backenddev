// routes/authRoutes.ts
import express from "express";
import {
  getUserProfile,
  googleAuth,
  logOut,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/authController";

const authrRouter = express.Router();

// Registration route
authrRouter.post("/register", registerUser);
authrRouter.post("/login", loginUser);
authrRouter.get("/logout", logOut);
authrRouter.post("/google-auth", googleAuth);


// Get user profile
authrRouter.get("/profile", getUserProfile);

// Update user profile
authrRouter.put("/profile", updateUserProfile); 

export default authrRouter;