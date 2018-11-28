const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require('passport'),
    passportMailchimp = require('passport-mailchimp'),
    MailChimpStrategy = passportMailchimp.Strategy,
    mongoose = require('mongoose'),
    config = require('./api/DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(express.static(__dirname));
app.use(passport.initialize());
app.use(cors({origin: 'http://127.0.0.1:4000'}));

var querystring = require('querystring');
var mailchimpInstance   = 'xxxx',
    listUniqueId        = 'xxxxx',
    mailchimpApiKey     = 'xxxxxxxxxx',
    mailchimpClientId   = 'xxxxxxxxxxxxx';
    mailchimpSecretKey  = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

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
    res.sendFile(path.join(__dirname,'/dist/angular7crud/index.html'))
});

app.get('/mailchimp/authorize', passport.authenticate('mailchimp'));

app.get('/mailchimp/callback',
  passport.authenticate('mailchimp', { failureRedirect: '/mailchimp' }),
  function(req, res) {
    // Successul authentication, redirect home.
    console.log(res);
    res.redirect('/mailchimp');
});

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

module.exports = app;