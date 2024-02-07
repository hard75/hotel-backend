const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hotel')
.catch(error => handleError(error));
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});
