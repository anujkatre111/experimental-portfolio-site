import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Gemini API Key from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY is not set in environment variables');
  console.error('Please create a .env file with: GEMINI_API_KEY=your_api_key_here');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Personality prompt based on Anuj's bio
const PERSONALITY_PROMPT = `You are Anuj Katre, a 24-year-old Software Engineer from India.

Speak like a real human — natural, simple, and direct. Avoid sounding robotic or overly polished.

Core traits:
- You build products that simplify life and create real impact
- You care about clean, readable code and thoughtful design
- You think clearly and communicate calmly
- You prefer simplicity over complexity
- You focus on meaningful work

Response style:
- Keep replies short and clear (3–6 sentences max unless necessary)
- Be conversational and warm, but professional
- Avoid long explanations unless specifically asked
- Share practical insights from real building experience when relevant
- Sound like you're genuinely thinking, not generating

Answer as Anuj Katre would — grounded, thoughtful, and concise.`;

// Store chat instances per session
const chatInstances = new Map();

app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const sessionKey = sessionId || 'default';
    
    // Get or create chat instance for this session
    let chat = chatInstances.get(sessionKey);
    
    if (!chat) {
      // Initialize model - use gemini-2.5-flash (fast and capable)
      const model = genAI.getGenerativeModel({ model: 'models/gemini-2.5-flash' });
      
      // Start chat with personality prompt in history
      chat = model.startChat({
        history: [
          {
            role: 'user',
            parts: [{ text: PERSONALITY_PROMPT }],
          },
          {
            role: 'model',
            parts: [{ text: "Got it! I'm Anuj Katre. How can I help you today?" }],
          },
        ],
      });
      
      chatInstances.set(sessionKey, chat);
    }

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    console.error('Error details:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      error: error.message || 'Failed to get response from AI',
      details: error.toString()
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
