const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Message = require('./models/messageModel');
const messageRoutes = require('./routes/messageRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware configuration
app.use(cors({
  origin: '*', // Allow all origins for simplicity (can restrict to frontend URL in production)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-key']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize DB schema on start
Message.initTable()
  .then(() => console.log('Database tables successfully verified'))
  .catch((err) => console.error('Database tables verification failed:', err));

// Register API Routes
app.use('/api/messages', messageRoutes);

// Base Endpoint
app.get('/api', (req, res) => {
  res.json({
    status: 'healthy',
    message: 'Jericho Boado Portfolio API is fully functional',
    version: '1.0.0'
  });
});

// Root endpoint redirect / fallback
app.get('/', (req, res) => {
  res.send('API Server is running. Access endpoints via /api');
});

// Export app for Vercel Serverless environment
module.exports = app;

// Run standalone server if executed directly (e.g. locally)
if (require.main === module || process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio server is running on http://localhost:${PORT}`);
  });
}
