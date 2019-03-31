var express = require('express');
var app = express();

//you need this to be able to process information sent to a POST route
	var bodyParser = require('body-parser');

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// parse application/json
	app.use(bodyParser.json());

var path = require("path");

/*
	//make a form that takes in a technology (text field), whether it's back end or front end and the author of it 
		update the action and method of this form so it's POST

	//make a post route for where the form is submitting to
		console log the information submitted from the form 

		and redirect the user back to the form (get route)
*/

app.get('/tech-form', function(req, res){
	res.sendFile(path.join(__dirname, "public/tech-form.html"));
});


app.post('/ingest-tech', function(req, res){
	console.log(req.body);

	res.redirect('/tech-form');
});

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

app.get('/test', function(req, res){
	res.sendFile(path.join(__dirname, "public/test.html"));
});

app.get('/stuff', function(req, res){
	res.sendFile(path.join(__dirname, "public/stuff.html"));
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

app.get('/num-form', function(req, res){
	res.sendFile(path.join(__dirname, "public/num-form.html"));
});

app.get('/take-number', function(req, res){
	res.json(req.query);
});

// http://localhost:3000/take-frog-info?name=kermit&age=timeless&location=street
app.get('/take-frog-info', function(req, res){
	res.json(req.query);
});

app.listen(3000, function(){
	console.log('listening on 3000');
});





