import express from "express";
import { getPost } from "../controllers/posts";

const router = express.Router();
router.get('/', getPost)

export default router;