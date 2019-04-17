const router = require('express').Router();
const users = require('./users');
const auth = require('./auth');
const session = require('./session');

//Routes
router.use("/users", users);
router.use("/auth", auth);
router.use("/session", session);


//Error handling
router.use((req, res, next) => {
  const err = new Error("API ROUTE NOT FOUND!");
  err.status = 404;
  next(err)
})

module.exports = router;
