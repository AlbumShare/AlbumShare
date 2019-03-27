const router = require('express').Router();

const Users = require('../db/models/Users');

// GET all users
router.get('/', async (req, res, next) => {
  try {
    const allUsers = await Users.findAll();
    res.send(allUsers);
  } catch (error) {
    console.log("ERROR");
    next(error);
  }
})

// POST a new user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await Users.create(req.body);
    res.json(newUser);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    }
    else {
      console.log("Error with POST user");
      next(error);
    }
  }
})

module.exports = router;