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

// LOGIN

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!userData) {
            res.status(400).json({ message: 'No user with that e-mail address' })
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword)
        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' })
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.json({ user: userData, message: 'You are now logged in!' })
        });
    } catch (err) {
        console.log(err)
        res.send()
    }
});

module.exports = router;