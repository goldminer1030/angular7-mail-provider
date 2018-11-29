const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require('passport'),
    session = require('express-session');
    passportMailchimp = require('passport-mailchimp'),
    passportAweber = require('passport-aweber'),
    MailChimpStrategy = passportMailchimp.Strategy,
    AweberStrategy = passportAweber.Strategy,
    mongoose = require('mongoose'),
    config = require('./api/DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname));
app.use(cors({origin: 'http://127.0.0.1:4000'}));

var mailchimpInstance   = 'xxxx',
    listUniqueId        = 'xxxxx',
    mailchimpApiKey     = 'xxxxxxxxxx',
    mailchimpClientId   = 'xxxxxxxxxxxxx';
    mailchimpSecretKey  = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    aweberConsumerKey   = 'xxxxxxxxxxxxxxxxxxxxxxxx',
    aweberConsumerSecret= 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

// Mailchimp
passport.use(new MailChimpStrategy({
    clientID: mailchimpClientId,
    clientSecret: mailchimpSecretKey,
    callbackURL: "/mailchimp/callback",
    passReqToCallback: true
    }, function (accessToken, refreshToken, profile, done) {
        console.log('DONE!!!');
    }
));

// AWeber
passport.use(new AweberStrategy({
    consumerKey: aweberConsumerKey,
    consumerSecret: aweberConsumerSecret,
    callbackURL: "/aweber/callback"
  },
  function(token, tokenSecret, profile, done) {
    console.log('DONE!!!');
  }
));

// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/dist/angular7crud/index.html'))
});

// Mailchimp
app.get('/mailchimp/authorize', passport.authenticate('mailchimp'));
app.get('/mailchimp/callback',
  passport.authenticate('mailchimp', { failureRedirect: '/mailchimp' }),
  function(req, res) {
    // Successul authentication, redirect home.
    console.log(res);
    res.redirect('/mailchimp');
});

// Aweber
app.get('/aweber/authorize', passport.authenticate('aweber'));
app.get('/aweber/callback', 
  passport.authenticate('aweber', { failureRedirect: '/aweber' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/aweber');
  });

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

module.exports = app;