const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rubberDucksRoutes = require('./routes/rubberDucks')

dotenv.config();

// Constants
const PORT = process.env.PORT;

// Create Express server
const app = express();

// Middleware
app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/rubberDucks', rubberDucksRoutes)




