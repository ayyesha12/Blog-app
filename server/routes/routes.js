import express from "express"
import { loginUser, signupUser } from "../controller/user-controller.js";
import { createPost } from "../controller/post-controller.js";
import { authenticateToken } from "../controller/jwt-controller.js";


const router = express.Router();

// User routes
router.post('/signup', signupUser);
router.post('/login', loginUser);

// File routes
router.post('/create',authenticateToken,createPost);

export default router; 