import { authMiddleware2 } from './../middleware/authMiddleware';
// routes/authRoutes.ts
import express from "express";

import roleMiddleware from "../middleware/roleMiddleweare";
import { createBlog, getAllBlogs, updateBlog, deleteBlog } from '../controllers/blogController';



const blogRouter = express.Router();
// create blog
blogRouter.post("/blog/create", createBlog);
blogRouter.put("/blog/update/:id", updateBlog);
blogRouter.delete("/blog/delete/:id", deleteBlog);
// get all blogs data from database
blogRouter.get("/blogs", getAllBlogs );


export default blogRouter;
