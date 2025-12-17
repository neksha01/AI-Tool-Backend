import dotenv from "dotenv";
dotenv.config();


import mongoose from "mongoose";
import app from "./src/app.js";
import authRoutes from "./src/routes/authRoutes.js";
import aiRoutes from "./src/routes/aiRoutes.js";
import chatRoutes from "./src/routes/chat.js";
const PORT = process.env.PORT || 8080;


app.use("/api/ai", aiRoutes);


// routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);


// test route
app.get("/", (req, res) => {
  res.send("AI Tool Backend running 🚀");
});

// database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

   app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
