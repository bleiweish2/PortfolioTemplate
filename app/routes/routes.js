var path = require('path');
var aws = require('aws-sdk');
aws.config.loadFromPath('app/routes/config.json');
var ses = new aws.SES({apiVersion: '2010-12-01'});
var to = ['fooeyonyou3@gmail.com'];
var from = 'fooeyonyou3@gmail.com';
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'))
	});
	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
	});
	app.get('/portfolio', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/portfolio.html'));
	});
	app.get('/resume', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/resume.html'));
	});
	app.get('/contact', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/contact.html'));
	});
	app.get('/download', function(req, res, next){
		var file = __dirname + '/../public/images/Menu.pdf';
		res.download(file);
	});
	app.post('/email', function(req, res, next){
		console.log(req.body);
		var bodyText = req.body.message + "\n\nFrom " + req.body.name + "\nEmail: " + req.body.email + "\n\nSent from joshuaharper.com";
		ses.sendEmail({
			Source: from,
			Destination: {ToAddresses: to},
			Message: {
				Subject: {
					Data: 'From joshuaharper.com'
				},
				Body: {
					Text: {
						Data: bodyText,
					}
				}
			}
		},
		function(err, data) {
			if(err) throw err
			console.log('Email send:');
			console.log(data);
		});
		res.send(true);
	});
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
	});
}