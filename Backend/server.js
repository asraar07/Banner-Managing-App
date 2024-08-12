// server.js
const express = require('express');
const cors = require('cors');
const bannerRoutes = require('./routes/bannerroutes');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', bannerRoutes);
app.use(express.static(path.join(__dirname, '../dynamic-one-page-website/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,  '../dynamic-one-page-website/build', 'index.html'));
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
