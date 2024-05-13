import express from "express";

//importing the routes function or you can say components
import { login, signup, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
