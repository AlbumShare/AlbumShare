const router = require('express').Router();
const passport = require('passport');
const User = require('../db/models/Users');

// // GET all users
// router.get('/', async (req, res, next) => {
//   try {
//     const allUsers = await User.findAll();
//     res.send(allUsers);
//   } catch (error) {
//     console.log("ERROR");
//     next(error);
//   }
// })
//
// // GET single user
// router.get('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.json(user);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// })
//
// // POST a new user
router.post('/', async (req, res, next) => {
  try {
    console.log(req.body)
    await User.create(req.body);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    }
    else {
      console.log("Error with POST user");
      next(error);
    }
  }
  // passport.authenticate('local-signup', function (err, user, info) {
  //   if (err) {
  //     res.status(400).send(err);
  //   }
  //   res.send(user);
  // })(req, res, next);
})
//
// // PUT (EDIT) a user's information
// // router.put('/:id', async (req, res, next) => {
// //   try {
//
// //   } catch (error) {
//
// //     next(error);
// //   }
// // })
//
// module.exports = router;



  /**
   * @POST
   */
  // router.post('/', function (req, res, next) {
  //   passport.authenticate('local-signup', function (err, user, info) {
  //     if (err) {
  //       res.status(400).send(err);
  //     }
  //     res.send(user);
  //   })(req, res, next);
  // });

  /**
   * @POST
   * @GET
   */
  router.route('/:username')

  // GET :username
      .get(function (req, res) {
        console.log(req.isAuthenticated());
        if (req.isAuthenticated()) {
          User.findOne({where: {userName: req.params.username}}, function (err, user) {
            res.status(200).send(user);
          });
        }
        res.status(403);
      })

      /**
       * PUT Update :username
       */
      .put(function (req, res) {

        // Find username
        User.findOne({where: {userName: req.params.username}}, function (err, user) {
          if (req.body.userName != undefined) {
            user.userName = req.body.username;
          }
          if (req.body.password != undefined) {
            user.password = req.body.password;
          }
          if (req.body.salt != undefined) {
            user.salt = req.body.salt;
          }
          if (req.body.firstName != undefined) {
            user.firstName = req.body.firstName;
          }
          if (req.body.lastName != undefined) {
            user.lastName = req.body.lastName;
          }

          // Update user model with values
          user.update(
              {
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName
              },
              function (err) {
                if (err) {
                  res.status(500).send();
                }
                res.json({message: true});
              });
        });
      })
module.exports = router;