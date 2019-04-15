const router = require('express').Router();
const users = require('./users');
const passport = require('./passport')
const auth = require('./auth');
//Routes
router.use("/users", users);
router.use("passport", passport);
router.use("/auth", auth);

//Error handling
router.use((req, res, next) => {
  const err = new Error("API ROUTE NOT FOUND!");
  err.status = 404;
  next(err)
})

module.exports = router;