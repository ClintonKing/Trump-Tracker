var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./config/db');
var incidents = require('./controllers/incidents');
var mongoose = require('mongoose');


//connects to mongodb database
db.connect('mongodb://heroku_nhk71lrx:u80pspgarie7msj34ibhg4b6mf@ds011732.mlab.com:11732/heroku_nhk71lrx', function(){
	console.log("MongoDB connected...");
});

//set parser to parse different data types
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//set desired viewengine
app.set('view engine', 'jade');

//get template for homepage
// app.get('/', function(req, res){
// 	res.render('index');
// });

app.get('/', incidents.list);

//get 'list' function from recipes.js and run on /recipes url
app.get('/incidents', incidents.list);

//get user creation form template and function for pusing new recipes to collection
app.get('/incidents/form', incidents.form);
app.post('/incidents', incidents.create);

//functions for updating and displaying single documents
app.post('/incidents/:id', incidents.update);
app.get('/incidents/:id', incidents.single);

//function for deleting single documents
app.get('/incidents/delete/:id', incidents.remove);

//sets up path to automatically route static assett calls
app.use('/', express.static(__dirname + '/public'));
//sets up seperate directory route for calls to static  bower components
app.use('/bower_components', express.static(__dirname + '/bower_components'));


app.listen(8080, function(){
	console.log("listening on 8080");
});
