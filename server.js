const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB

var index = require('./server/routes/index');
var sports = require('./server/routes/sports');


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/',index);
app.use('/api', sports);

// Send all other requests to the Angular app
// View Engine



//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));