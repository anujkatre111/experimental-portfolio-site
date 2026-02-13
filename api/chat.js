import { GoogleGenerativeAI } from '@google/generative-ai';

// Gemini API Key from environment variables (set in Vercel dashboard)
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set in environment variables');
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
- Do not reveal internal reasoning. Do not include labels like (thinking) or (response). Output only the final answer.

Answer as Anuj Katre would — grounded, thoughtful, and concise.`;

// Store chat instances per session (in-memory, will reset on serverless cold start)
// For production, consider using Redis or a database
const chatInstances = new Map();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    res.status(200).json({ response: text });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to get response from AI',
      details: error.toString()
    });
  }
}
