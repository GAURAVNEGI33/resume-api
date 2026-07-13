const express = require('express');
const app = express();
const PORT = 3000;

// Middleware - req.body ko JSON parse karne ke liye
app.use(express.json());

// Routes import karo
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const documentRoutes = require('./routes/documents');
const templateRoutes = require('./routes/templates');
const aiRoutes = require('./routes/ai');
const applicationRoutes = require('./routes/applications');

// Routes use karo
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/applications', applicationRoutes);

// Root route - server check karne ke liye
app.get('/', (req, res) => {
  res.json({ message: 'Resume API is running!' });
});

// Server start karo
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});