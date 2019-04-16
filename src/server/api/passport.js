const LocalStrategy = require('passport-local').Strategy;
const db = require('../db')

module.exports = function (passport) {
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(function (id, done){
      try {
        const user = db.models.Users.findById(id);
        if(user.isAdmin) {
          done(null, user);
        }
        else {
          done(null, {
            id: user.id,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lasName,
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

                db.models.user.findOne({'local.username': username}, function (err, user) {
                    if (err) {
                        return done(err);
                    }

                    if (user) {
                        return done(null, false, {message: 'User email already taken: ' + username});
                    }
                    else {
                        var newUser = new db.models.user();

                        newUser.local.username = username;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.salt = req.body.salt;
                        newUser.first_name = req.body.first_name;
                        newUser.last_name = req.body.last_name;
                        newUser.delete = false;

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

            db.models.user.findOne({'local.username': username}, function (err, user) {
                if (err) {
                    return done(err);
                }

                // If no user found
                if (!user) {
                    return done(null, false, {message: 'No User found'});
                }

                // If user password does not match
                if (user.validPassword(password)) {
                    return done(null, false, {message: 'Password does not match'});
                }

                // If all is ok, return user
                return done(null, user);
            });
        }));
};