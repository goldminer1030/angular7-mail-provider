const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require('passport'),
    passportMailchimp = require('passport-mailchimp'),
    MailChimpStrategy = passportMailchimp.Strategy,
    mongoose = require('mongoose'),
    config = require('./DB');

const businessRoute = require('./routes/business.route');
const mailchimpRoute = require('./routes/mailchimp.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname));
app.use(passport.initialize());
app.use(cors({origin: 'http://127.0.0.1:4200'}));
app.use('/business', businessRoute);

var request = require('superagent');
var querystring = require('querystring');
var mailchimpInstance   = 'us19',
    listUniqueId        = 'b490c8899e',
    mailchimpApiKey     = '0f2d49cfa96a3c4823696480deba3d70-us19',
    mailchimpClientId   = '214739307155';
    mailchimpSecretKey  = '278091e0394ef6eae40768ac8f9c3ffa857c6008f01f18b74f';

passport.use(new MailChimpStrategy({
    clientID: mailchimpClientId,
    clientSecret: mailchimpSecretKey,
    callbackURL: "/mailchimp/callback"
    }, function (accessToken, refreshToken, profile, done) {
        console.log('DONE!!!');
    }
));

// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../dist/angular7crud/index.html'))
});

app.get('/mailchimp/authorize', passport.authenticate('mailchimp'));

app.get('/mailchimp/callback',
  passport.authenticate('mailchimp', { failureRedirect: 'http://127.0.0.1:4200/mailchimp' }),
  function(req, res) {
    // Successul authentication, redirect home.
    console.log(res);
    res.redirect('http://127.0.0.1:4200/mailchimp');
});

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

module.exports = app;