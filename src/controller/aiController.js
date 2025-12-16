import Chat from "../models/Chat.js";
import groq from "../config/groq.js";



export const askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    const answer = completion.choices[0].message.content;

    // 🔥 SAVE PER USER
    await Chat.create({
      userId: req.userId,
      question: prompt,
      answer,
    });

    res.json({ response: answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "AI failed" });
  }
};

export const getHistory = async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: "Failed to load history" });
  }
};
