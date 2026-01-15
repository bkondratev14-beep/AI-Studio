// Express Server for self-hosting
// Run: npm install && npm start

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['POST', 'OPTIONS'],
}));

// Rate limiting (simple in-memory)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests per minute
const RATE_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

// Escape special characters for Telegram Markdown
function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}

// API endpoint
app.post('/api/send-telegram', async (req, res) => {
  try {
    const clientIP = req.ip || req.socket.remoteAddress || 'unknown';
    
    // Rate limiting
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const { name, contact, description, captcha } = req.body;

    // Server-side captcha validation
    if (captcha !== '16') {
      return res.status(400).json({ error: 'Invalid captcha' });
    }

    // Validate required fields
    if (!name?.trim() || !contact?.trim() || !description?.trim()) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Get Telegram credentials
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Format message for Telegram
    const message = `📋 *Новая заявка!*

👤 *Имя:* ${escapeMarkdown(name)}
📞 *Контакт:* ${escapeMarkdown(contact)}
📝 *Описание:* ${escapeMarkdown(description)}

⏰ *Время:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`;

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      return res.status(500).json({ error: 'Failed to send message' });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
