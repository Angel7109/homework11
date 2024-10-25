const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World from Week 11 Project!');
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
