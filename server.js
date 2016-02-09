var express = require('express'),
	app = express(),
	logger = require('morgan'),
	path = require('path'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	apiRouter = require('./api/routes/userRoutes'),
	port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/node-crm-app')

// set up middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'))

app.get('/', function(req,res){
	console.log('getting index?')
	res.render('index')
})

app.use('/api', apiRouter) // whenever we get a request starting with /api

app.listen(port)
console.log("listening on port " + port)




