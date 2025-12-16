import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { askAI, getHistory } from "../controller/aiController.js";




const router = express.Router();
router.get("/history", protect, getHistory);

router.post("/ask",protect, askAI);

export default router;
