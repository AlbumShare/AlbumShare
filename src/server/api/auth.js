const router = require('express').Router();
const Users = require('../db/models/Users');

router.post('/login', async (req, res, next) => {
  console.log('/login HIT!');

  try {
    const user = await Users.findOne({where: {email: req.body.email}});
    if(!user) {
      res.status(401).send('Wrong username and/or password');
    }
    else if(!user.passwordIsCorrect(req.body.password)) {
      res.status(res.status(401).send('Wrong username and/or password'));
    }
    else {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch (error) {
    next(error);
  }
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

module.exports = router;