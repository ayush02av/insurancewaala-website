const express = require('express'); // user express.js library to setup server
const app = express(); // initialize express application

const path = require('path'); // use path library to get current directory path

require('dotenv').config(); // use dotenv library to use .env variables
const PORT = process.env.PORT || 5000; // use PORT to set server on from process.env

app.set('view engine', 'ejs'); // set the view engine to ejs
app.set('views', path.join(__dirname, '/')); // set the views folder to current directory
app.use('/static', express.static(__dirname + '/static')) // set the static folder to current directory

app.get('/', function (req, res) { // index page
    res.render('pages/index');
});
app.get('/dashboard', function (req, res) { // dashboard page
    res.render('pages/dashboard');
});
app.get('/about', function (req, res) { // about page
    res.render('pages/about');
});

app.listen(PORT, () => { // start the server on PORT
    console.log(`Server started on port http://localhost:${PORT}`)
})