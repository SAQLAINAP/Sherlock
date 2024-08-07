const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const indexRouter = require('./routes/index');

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
