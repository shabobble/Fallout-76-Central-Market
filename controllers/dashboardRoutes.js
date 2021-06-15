const router = require('express').Router()
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn
    })
})

module.exports = router;