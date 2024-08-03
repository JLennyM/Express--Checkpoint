// app.js
const express = require('express');
const path = require('path');
const workingHours = require('./middleware/workingHours');

const app = express();

// Set up template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use working hours middleware
app.use(workingHours);

// Define routes
app.use('/', require('./routes/index'));
app.use('/services', require('./routes/services'));
app.use('/contact', require('./routes/contact'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
