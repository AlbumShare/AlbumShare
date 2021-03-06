const router = require('express').Router();
const Users = require('../db/models/Users');
const passport = require('passport');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await Users.findOne({where: {email: req.body.email}});
    if(!user) {
      res.status(401).send('Wrong username and/or password');

    }
    else if(!user.passwordIsCorrect(req.body.password)) {
      res.status(res.status(401).send('Wrong username and/or password'));

    }
    else {
      console.log('log in success! ');


      // req.logIn(user, err => (err ? next(err) : res.json(user)));
      req.logIn(user, err => {
        
        console.log(err);

        if(err) return next(err);
        // console.log(user);
        res.json(user);
      })

    }
  } catch (error) {

    next(error);
  }
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;