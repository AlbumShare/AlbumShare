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

// GET single user
router.get('/:id', async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
})

// POST a new user
router.post('/', async (req, res, next) => {
  try {
    console.log(req.body)
    await Users.create(req.body);
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

// PUT (EDIT) a user's information
// router.put('/:id', async (req, res, next) => {
//   try {
    
//   } catch (error) {

//     next(error);
//   }
// })

module.exports = router;