var express = require('express');
var app = express();

var path = require("path");

app.get('/test', function(req, res){
	res.sendFile(path.join(__dirname, "public/test.html"));
});

app.get('/stuff', function(req, res){
	res.sendFile(path.join(__dirname, "public/stuff.html"));
});

app.get('/name', function(req, res){
	res.sendFile(path.join(__dirname, "public/steph.html"));
});

app.get('/one', function(req, res){
	res.sendFile(path.join(__dirname, "public/two.html"));
});
app.get('/three', function(req, res){
	//make sure json is lowercased
	res.json({count: "four", location: "five", favfood: "six", whathappened: "when you clicked on the /three link it printed out the json object in the server.js file to the page"});
});

// =====================================================
// http://localhost:3000/who type in to activate below:
app.get('/who', function(req, res){
	res.sendFile(path.join(__dirname, "public/name.html")); 
});  // name.html is called and on the page a href link for /sam is printed to page
// the User clicks /sam and the below app.get request is called which prints
// the json object to the screen.
// ====================================================

// note: the route /samsays is what you enter into the localhost:3000/samsays which
// then pulls the html file named, samsays.html, this is what is printed on the page,
// then inside the html file, is a 'a href link' that the User clicks on,
// this grabs the 'app.get('/stephanie)... below and prints to page the res.json object,
// to the page.
app.get('/samsays', function(req, res){
	res.sendFile(path.join(__dirname, "public/samsays.html"));
});

// /samsays prints out /goodbye User clicks this and the json object prints
// to the screen.
//make sure to not forget the / in the beginning of the route
app.get('/goodbye', function(req, res) {
	res.json({fav_activity: "socializing", location: "the burbs", favtimeofday: "night"});
});
// ===================================================
app.get('/stephanie', function(req, res){
	//make sure json is lowercased
	res.json({name: "Stephanie", location: "San Francisco", favmovie: "Movie 2"});
});




app.get('/brown-bear', function(req, res){
	//make sure json is lowercased
	res.json({avg_weight: 500, location: 'Yosemite', favfood: 'picnic baskets'});
});

app.get('/sam', function(req, res){
	//make sure json is lowercased
	res.json({name: "Sam", location: "San Francisco", favmovie: "Movie 1"});
});



app.get('/take-dog-info', function(req, res) {
	res.json(req.query);
});

app.get('/question1', function(req, res) {
	res.json(req.query);
});

app.get('/question2', function(req, res) {
	res.json(req.query);
});

app.get('/question3', function(req, res) {
	res.json(req.query);
});

app.get('/question4', function(req, res) {
	res.json(req.query);
});

app.get('/question5', function(req, res) {
	res.json(req.query);
});

app.get('/question6', function(req, res) {
	res.json(req.query);
});

app.get('/question7', function(req, res) {
	res.json(req.query);
});

app.get('/question8', function(req, res) {
	res.json(req.query);
});

app.get('/question9', function(req, res) {
	res.json(req.query);
});

app.get('/question10', function(req, res) {
	res.json(req.query);
});

app.listen(3000, function(){
	console.log('listening on 3000');
});