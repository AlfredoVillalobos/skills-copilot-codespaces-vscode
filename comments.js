// Create web server
// npm install express body-parser

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// Set views path, template engine and default layout
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/', function(req, res) {
    res.render('index');
});

app.post('/comments', function(req, res) {
    res.render('comments', { comments: req.body.comments });
});

// Start server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});