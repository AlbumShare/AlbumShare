const router = require('express').Router();
const passport = require('passport')

router.get('/login', function(req, res, next){
    console.log(req);
    res.send(req.session);
});


/**
 * @POST
 */
router.post('/login', function (req, res, next) {
    passport.authenticate('local-login', function (err, user, info) {
        var error = err || info;
        if (error) {
            return res.json(400, error);
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.send(err);
            }

            user.local.password = null;
            res.status(200).send(user);
        });
    })(req, res, next);
});

/**
 * Logout
 */
router.post('/logout', function (req, res) {
    req.logout();
    res.send({message: 'logout'});
});

module.exports = router;
