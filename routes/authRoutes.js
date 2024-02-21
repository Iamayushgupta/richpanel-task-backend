const router = require('express').Router();
const passport = require('passport');

// Routes to check facebook connection and redirect to dashboard
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'pages_show_list', 'pages_messaging'] }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/dashboard');
});

module.exports = router;
