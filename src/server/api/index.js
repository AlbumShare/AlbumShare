const router = require('express').Router();
const users = require('./users');

//Routes
router.use("/users", users);

//Error handling
router.use((req, res, next) => {
  const err = new Error("API ROUTE NOT FOUND!");
  err.status = 404;
  next(err)
})

module.exports = router;