import express from "express";
import { signup, login } from "../controller/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// protected route
router.get("/me", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    userId: req.userId
  });
});

export default router;
