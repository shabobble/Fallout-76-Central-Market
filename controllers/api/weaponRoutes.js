const router = require('express').Router();
const { Weapon } = require('../../models');

router.get('/', (req, res) => {
    Weapon.findAll({})
    .then(weaponData => res.json(weaponData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;