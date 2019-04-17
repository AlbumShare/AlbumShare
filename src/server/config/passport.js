const LocalStrategy = require('passport-local/lib').Strategy;
const db = require('../db')

module.exports = function (passport) {
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(function (id, done){
      try {
        const user = db.models.user.findById(id);
        if(user.isAdmin) {
          done(null, user);
        }
        else {
          done(null, {
            id: user.id,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          });
        }
      } catch (error) {
        done(error);
      }
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, username, password, done){
            process.nextTick(function () {

                db.models.user.findOne({where: {userName: req.body.userName}}, function (err, user) {
                    if (err) {
                        return done(err);
                    }

                    if (user) {
                        return done(null, false, {message: 'Username already taken: ' + username});
                    }
                    else {
                        var newUser = new db.models.user();

                        newUser.userName = username;
                        //newUser.password = newUser.generateHash(password);
                        newUser.salt = req.body.salt;
                        newUser.firstName = req.body.firstName;
                        newUser.lastName = req.body.LastName;
                        newUser.email = req.body.email;

                        // save the user
                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            })
        }));

    passport.use('local-login', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, username, password, done) {

            db.models.user.findOne({where: {userName: req.body.userName}}, function (err, user) {
                if (err) {
                    return done(err);
                }

                // If no user found
                if (!user) {
                    return done(null, false, {message: 'No User found'});
                }

                // If user password does not match
                if (user.password != password) {
                    return done(null, false, {message: 'Password does not match'});
                }

                // If all is ok, return user
                return done(null, user);
            });
        }));
};