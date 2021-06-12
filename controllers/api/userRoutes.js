const router = require('express').Router();
const { User, Weapon, Armor } = require('../../models');

//GET api/users

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//GET single user

router.get('/:username', (req, res) => {
    User.findOne({
        where: {
            username: req.params.username
        },
        include: [
            {
                model: Weapon,
                // attributes: ['id', 'mainEffect', 'majorEffect', 'minorEffect', 'weaponType', 'capsValue', 'created_at']
            },
            {
                model: Armor,
                // attributes: ['id', 'mainEffect', 'majorEffect', 'minorEffect', 'armorType', 'capsValue', 'created_at']
            }
        ]
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'No user found with this username' })
            return;
        }
        res.json(userData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;