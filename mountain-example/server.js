/**
 * Created by prakash on 11/12/17.
 */
var express = require('express'),
  http = require('http'),
  //passport = require('passport'),
  //morgan = require('morgan'),
  //compress = require('compression'),
  //bodyParser = require('body-parser'),
  //methodOverride = require('method-override'),
  //cookieParser = require('cookie-parser'),
  //session = require('express-session'),
  //LocalStrategy = require('passport-local').Strategy,
  serverStatic = require('serve-static'),
  MOUNTAIN = require('./mountain').MOUNTAIN;

//var USER = {username: 'admin', password: 'admin'};

var app = express();
//app.use(express.favicon('favicon.ico'));
//app.use('favicon.ico', express.static('/app'));
//app.use(morgan());
//app.use(compress());
//app.use(bodyParser());

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });
//app.use(methodOverride());
//app.use(cookieParser());

// app.use(session({
//   secret : 'almvnirtgd#$DFsa25452*AYD*D*S!@!#adsda))Ddsadsax',
//   cookie: {httpOnly: true, secure: false, maxAge: 86400000},
//   store: new session.MemoryStore()
// }));

//app.use(passport.initialize());
//app.use(passport.session());


//app.use('/', serverStatic(__dirname + '/app'));
app.use(express.static(__dirname+'/app'));

app.get('/api/mountain', function(req, res) {
  console.log("returing: " + MOUNTAIN.MOUNTAINS_LIST);
  res.send(MOUNTAIN.MOUNTAINS_LIST);
});


app.get('/api/mountain/:code', function(req, res) {
  var code = req.params.code;
  res.send(MOUNTAIN.MOUNTAIN_DETAILS[code]);
});


var port = process.env.PORT || 8000;
app.listen(port);
console.log('Please go to http://localhost:' + port);

