const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./db');
const sessionStore = new SequelizeStore({db});
const morgan = require('morgan');
const passport = require('passport');

// express instance
const app = express();

// cors
app.use(cors());

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ exteded: true }));


// middleware to serve static files
app.use(express.static(path.join(__dirname + '/../../public')));

// middleware for our express routes
app.use('/api', require('./api'));

// app.get('/', (req, res, next) => {
//   res.send('hello you reached get/!');
// })

// send index.html to ALL requests
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/../../public'));
});

// error handling middleware
app.use((err, req, res, next) => {
  // console.err(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});

// logging middleware
app.use(morgan('dev'));

// passport middleware: used for auth user
app.use(passport.initialize());
app.use(passport.session());

// express-session: used for keep user logging in
app.use(session({
  // secret: 'true',
  secret: 'secret_string',
  store: sessionStore,
  resave: false,
  saveUninitialized: true
}))

// check if client sent cookie
// app.use(function(req, res, next) {
//   console.log('session id is: , ', req.session.id)
//   var cookie = req.cookies.cart // THIS IS UNDEFINED!
//   if (cookie === undefined) {
//     // no: set a new cookie
//     res.cookie('cart', '', {maxAge: 900000, httpOnly: true})
//     console.log('cookie created successfully')
//   } else {
//     // yes, cookie was already present
//     console.log('cookie exists', cookie)
//   }
//   next()
// });

module.exports = app;