import dotenv from 'dotenv';

// Load environment variables BEFORE importing app
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 BiblioSmart API running on http://localhost:${PORT}`);
  console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
});
