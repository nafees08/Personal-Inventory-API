const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const dotenvPath = process.env.DOTENV_PATH || path.join(__dirname, '.env');
require('dotenv').config({ path: dotenvPath, debug: true });

const app = express();
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Personal Inventory API is running', status: 'ok' });
});

// Routes (we'll wire these up next)
const itemRoutes = require('./routes/items');
app.use('/items', itemRoutes);

// DB connect + start server
const mongoUri = process.env.MONGO_URI;
if (mongoUri) {
  mongoose.connect(mongoUri)
    .then(() => {
      console.log('MongoDB connected');
      app.listen(3001, () => console.log('Server running on port 3001'));
    })
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.warn('MONGO_URI not set. Starting server without DB connection.');
  app.listen(3001, () => console.log('Server running on port 3001 (no DB)'));
}