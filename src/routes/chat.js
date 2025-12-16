import express from "express";
import Chat from "../models/Chat.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/history", protect, async (req, res) => {
  const chats = await Chat.find({ userId: req.userId }).sort({ createdAt: 1 });
  res.json(chats);
});

export default router;
