const router = require('express').Router()
const { Weapon, Armor, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
    })
})

router.get('/add-weapon', withAuth, (req, res) => {
    res.render('add-weapon', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
    })
})

router.get('/add-armor', withAuth, (req, res) => {
    res.render('add-armor', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
    })
})

router.get('/view-edit', withAuth, (req, res) => {
    Weapon.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'mainEffect',
            'majorEffect',
            'minorEffect',
            'weaponType',
            'capsValue',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(weaponData => {
        const weapons = weaponData.map(weapon => weapon.get({ plain: true }));
        res.render('view-edit', { weapons, loggedIn: true, user_id: req.session.user_id})
    })
})

module.exports = router;