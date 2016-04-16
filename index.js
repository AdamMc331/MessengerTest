// Require
var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

// Set port
app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function(req, res) {
	res.send('Hello world, I am a chat bot!')
})

// Facebook verification
app.get('/webhook/', function(req, res) {
	if(req.query['hub.verify_token'] === 'my_password') {
		res.send(req.query['hub.challenge'])
	}

	res.send('Error, wrong token.')
})

// Start server
app.listen(app.get('port', function() {
	console.log('running on port', app.get('port'))
})
