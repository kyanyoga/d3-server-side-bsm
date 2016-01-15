var express = require('express');
var fs = require('node-fs');
var app = express();


app.engine('.html', require('ejs').__express);
// app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
console.log(__dirname);

var fixtureData = require('./public/data/fixture_data.json');
// Cant Pass the tsv data below - I think its because its not json.
//var heatData = require('./public/data/data.tsv');

// call to exported test functions
// app.locals.barChartHelper = require('./public/js/bar_chart_helper');
// app.locals.getTestHtml = require('./public/js/d3test.js');

// Load Test Data
var csvdata = [];
fs.readFile('./public/data/car.csv', 'utf8', function (err, data) {  
  csvdata = data;
  //console.log(csvdata);
});
	
app.get('/', function(req, res){
  res.render('index', {title: 'Bluesky Metrics', header: 'Coglex Meaning Dashboard'});
});

app.get('/bar', function(req, res) {
  res.render('bar', { fixtureData: fixtureData,
  					  title: 'Coglex / Lexial Meaning', 
  					  header: 'Lexial Meaning Bar Chart' });
});

app.get('/pie', function(req,res){
  res.render('pie', { fixtureData: fixtureData });	
});

app.get('/tst', function(req,res){
  res.render('tst', {csvdata: csvdata, 
  					 title: 'Cleaning Supplies', 
  					 supplies: 	['mop', 'broom', 'duster'] });
});

app.get('/*', function(req, res) {
  res.status(404).render('error', {title: 'Error', header: 'Error Page'});
});

app.listen(3000);
console.log('listening on port 3000');
