import { authMiddleware2 } from './../middleware/authMiddleware';
// routes/authRoutes.ts
import express from "express";

import roleMiddleware from "../middleware/roleMiddleweare";
import { createBlog, getAllBlogs } from '../controllers/blogController';



const blogRouter = express.Router();
// create blog
blogRouter.post("/blog/create", authMiddleware2, createBlog);
blogRouter.put("/blog/update", authMiddleware2, createBlog);
blogRouter.delete("/blog/delete", authMiddleware2, createBlog);
// get all blogs data from database
blogRouter.get("/blogs", getAllBlogs );


export default blogRouter;
