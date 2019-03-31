var express = require('express');
var app = express();

var path = require("path");

app.get('/test', function(req, res){
	res.sendFile(path.join(__dirname, "public/test.html"));
});

app.get('/stuff', function(req, res){
	res.sendFile(path.join(__dirname, "public/stuff.html"));
});

//make sure to not forget the / in the beginning of the route
app.get('/brown-bear', function(req, res){
	//make sure json is lowercased
	res.json({avg_weight: 500, location: 'Yosemite', favfood: 'picnic baskets'});
});

/*
	make three new routes
	one for each of your partners names

	and send a file back as the response with your partner's favorite movie
*/
app.get('/lawrence', function(req, res){
	res.sendFile(path.join(__dirname, "public/lawrence.html"));
});

app.get('/gleb', function(req, res){
	res.sendFile(path.join(__dirname, "public/gleb.html"));
});

app.get('/samantha', function(req, res){
	res.sendFile(path.join(__dirname, "public/samantha.html"));
});

app.get('/frog-form', function(req, res){
	res.sendFile(path.join(__dirname, "public/info.html"));
});

// http://localhost:3000/take-frog-info?name=kermit&age=timeless&location=street
app.get('/take-frog-info', function(req, res){
	res.json(req.query);
});

app.listen(3000, function(){
	console.log('listening on 3000');
});





