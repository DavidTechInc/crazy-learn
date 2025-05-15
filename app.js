const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// View engine (EJS or HTML fallback)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const courseRoutes = require('./routes/courseRoutes');
const projectRoutes = require('./routes/projectRoutes');

app.use('/api/users', userRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/projects', projectRoutes);

// Page routes (frontend)
app.get('/', (req, res) => {
  res.render('landing'); // or 'index' based on your view filenames
});

// Middleware - Not found
const notFound = require('./middleware/notFound');
app.use(notFound);

// Middleware - Error handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// MongoDB connection and start
const PORT = process.env.PORT || 10000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });