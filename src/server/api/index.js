const router = require('express').Router();
const users = require('./users');
const passport = require('./passport')

//Routes
router.use("/users", users);
router.use("passport", passport);

//Error handling
router.use((req, res, next) => {
  const err = new Error("API ROUTE NOT FOUND!");
  err.status = 404;
  next(err)
})

module.exports = router;