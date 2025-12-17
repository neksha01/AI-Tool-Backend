import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://react-ai-tool-2goh.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

export default app;
