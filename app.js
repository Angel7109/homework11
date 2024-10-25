const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello World from the Vercel deployment!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});