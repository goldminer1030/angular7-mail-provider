const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require('passport'),
    session = require('express-session'),
    request = require('superagent'),
    passportMailchimp = require('passport-mailchimp'),
    passportAweber = require('passport-aweber'),
    passportConstantContract = require('passport-constantcontact'),
    passportOAuth2 = require('passport-oauth2'),
    ActiveCampaign = require('activecampaign'),
    MailChimpStrategy = passportMailchimp.Strategy,
    AweberStrategy = passportAweber.Strategy,
    ConstantContactStrategy = passportConstantContract.Strategy,
    GetresponseStrategy = passportOAuth2.Strategy,
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
    aweberConsumerSecret= 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    constantcontractClientId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    constantcontractClientSecret = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    getresponseClientId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    getresponseClientSecret = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

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

// Constant Contract
passport.use(new ConstantContactStrategy({
    clientID: constantcontractClientId,
    clientSecret: constantcontractClientSecret,
    callbackURL: "constantcontact/callback"
  }, function (accessToken, refreshToken, profile, done) {
    console.log('DONE!!!');
  }
));

// Getresponse
passport.use(new GetresponseStrategy({
    authorizationURL: 'https://app.getresponse.com/oauth2_authorize.html',
    tokenURL: 'https://api.getresponse.com/v3/token',
    clientID: getresponseClientId,
    clientSecret: getresponseClientSecret,
    callbackURL: "getresponse/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('DONE');
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

// Constantcontract
app.get('/constantcontact/authorize', passport.authenticate('constantcontact'));
app.get('/constantcontact/callback',
  passport.authenticate('constantcontact', { failureRedirect: '/constantcontact' }),
  function(req, res) {
    // Successul authentication, redirect home.
    res.redirect('/constantcontact');
});

// Getresponse
app.post('/getresponse/authorize', function (req, res) {
  if(req.body && req.body.apikey) {
    // valid
    request
      .get('https://api.getresponse.com/v3/accounts')
      .set('X-Auth-Token', 'api-key ' + req.body.apikey)
      .send().end(function(err, response) {
        if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
          res.send({ success: true, message: 'Connected' });
        } else {
          res.send({ success: false, message: 'Not Connected' });
        }
      });
  } else {
    // invalid
    res.send({ success: false, message: 'Error' });
  }
});

// ActiveCampaign
app.post('/activecampaign/authorize', function (req, res) {
  if(req.body && req.body.apikey && req.body.url) {
    // valid

    var ac = new ActiveCampaign(req.body.url, req.body.apikey);

    ac.credentials_test().then(function(result) {
      if(result.success) {
        res.send({ success: true, message: 'Connected' });
      } else {
        res.send({ success: false, message: 'Not Connected' });
      }
    }, function(result) {
      res.send({ success: false, message: 'Error' });
    });
  } else {
    // invalid
    res.send({ success: false, message: 'Invalid parameter' });
  }
});

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

module.exports = app;