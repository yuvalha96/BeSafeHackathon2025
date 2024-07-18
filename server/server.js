const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.get('/', (req, res) => {
  res.send('Welcome to the Express server');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
