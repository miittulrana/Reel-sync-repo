const express = require('express');
const path = require('path');
const app = express();

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle all other routes by serving React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});