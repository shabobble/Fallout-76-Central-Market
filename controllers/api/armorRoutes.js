const router = require('express').Router();
const { Armor } = require('../../models');

router.get('/', (req, res) => {
    Armor.findAll({})
    .then(armorData => res.json(armorData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;