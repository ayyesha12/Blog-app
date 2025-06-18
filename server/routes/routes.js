import express from "express"
import { loginUser, signupUser } from "../controller/user-controller.js";
import { createPost,getAllPosts,getPost, updatePost } from "../controller/post-controller.js";
import { authenticateToken } from "../controller/jwt-controller.js";


const router = express.Router();

// User routes
router.post('/signup', signupUser);
router.post('/login', loginUser);

// File routes
router.post('/create',authenticateToken,createPost);
router.get('/posts',authenticateToken,getAllPosts);  
router.get('/post/:id',authenticateToken,getPost); // Assuming this is for getting a post by ID, you might want to change the controller function to handle that
router.put('/update/:id',authenticateToken,updatePost); // Assuming this is for updating a post, you might want to change the controller function to handle that
export default router; 