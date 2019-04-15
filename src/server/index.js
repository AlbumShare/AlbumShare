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
const cookieParser = require ('cookie-parser');


// register passport
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser( async (id, done) => {
  try {
    const user = db.models.Users.findById(id);
    if(user.isAdmin) {
      done(null, user);
    }
    else {
      done(null, {
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lasName,
        email: user.email
      });
    }
  } catch (error) {
    done(error);
  }
})

// express instance
const app = express();

// logging middleware
app.use(morgan('dev'));

// cors
app.use(cors());

// logging middleware
app.use(volleyball);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cookie parsering middleware
app.use(cookieParser());

// express-session: used for keep user logging in
app.use(session({
  // secret: 'true',
  secret: 'secret_string',
  store: sessionStore,
  resave: false,
  saveUninitialized: true
}))

// passport middleware: used for auth user
app.use(passport.initialize());
app.use(passport.session());

// check if client sent cookie
app.use(function(req, res, next) {
  console.log('session id is: , ', req.session.id)
  var cookie = req.cookies.cart // THIS IS UNDEFINED!
  if (cookie === undefined) {
    // no: set a new cookie
    res.cookie('cart', '', {maxAge: 900000, httpOnly: true})
    console.log('cookie created successfully')
  } else {
    // yes, cookie was already present
    console.log('cookie exists', cookie)
  }
  next()
});

// body parsing middleware
app.use(bodyparser.json());



// middleware to serve static files
app.use(express.static(path.join(__dirname + '/../../public')));

// middleware for our express routes
app.use('/api', require('./api'));

require('./api/passport.js')(passport);

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




module.exports = app;