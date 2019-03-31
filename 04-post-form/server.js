// 04-post-form exp-August 11
var express = require('express');
var app = express();

var path = require("path");

//you need this to be able to process information sent to a POST route
	var bodyParser = require('body-parser');

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// parse application/json
	app.use(bodyParser.json());

app.get('/post-form', function(req, res){
	res.sendFile(path.join(__dirname, "public/post-form.html"));
});

app.post('/take-in-post-info', function(req, res){
	//req.params
	//req.query
	// res.send(req.body);
	console.log(req.body);

	res.redirect('/post-form');
});

app.get('/stuff', function(req, res){
	res.sendFile(path.join(__dirname, "public/stuff.html"));
});

app.get('/frog-form', function(req, res){
	res.sendFile(path.join(__dirname, "public/info.html"));
});

app.get('/num-form', function(req, res){
	res.sendFile(path.join(__dirname, "public/num-form.html"));
});

// http://localhost:3000/take-frog-info?name=kermit&age=timeless&location=street
app.get('/take-frog-info', function(req, res){
	res.json(req.query);
});

app.listen(3000, function(){
	console.log('listening on 3000');
});





