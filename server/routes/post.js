import express from "express";
import { getPost,store } from "../controllers/posts.js";

const router = express.Router();
router.get('/', getPost)
router.post('/', store)

export default router;