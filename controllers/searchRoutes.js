const router = require('express').Router();
const { Weapon, Armor, User } = require('../models');
const sequelize = require('sequelize');

router.get('/', async (req, res) => {
    const terms = req.query.terms
    
    const weaponData = await Weapon.findAll({
        where: {
            [sequelize.Op.or]: [
                { mainEffect: { [sequelize.Op.like]: `%${terms}%`} },
                { majorEffect: { [sequelize.Op.like]: `%${terms}%`} },
                { minorEffect: { [sequelize.Op.like]: `%${terms}%`} },
                { itemType: { [sequelize.Op.like]: `%${terms}%`} },
            ]
        }, 
        include: [
            {
                model: User,
                attributes: ['username', 'platform']
            }
        ],
        order: [
            ['mainEffect', 'ASC']
        ]
    })

    const armorData = await Armor.findAll({
        where: {
            [sequelize.Op.or]: [
                { mainEffect: { [sequelize.Op.like]: `%${terms}%`} },
                { majorEffect: { [sequelize.Op.like]: `%${terms}%`} },
                { minorEffect: { [sequelize.Op.like]: `%${terms}%`} },
                { itemType: { [sequelize.Op.like]: `%${terms}%`} },
            ]
        },
        include: [
            {
                model: User,
                attributes: ['username', 'platform']
            }
        ],
        order: [
            ['mainEffect', 'ASC']
        ]
    })

    const weapons = weaponData.map(weapon => {
        //order/sort function
        weapon.get({ plain: true })
    });
    const armor = armorData.map(armor => armor.get({ plain: true }));

    res.render('search', {
        weapons,
        armor
    })
})

router.get('/:username', async (req, res) => {
        const user = await User.findOne({
        where: {
            username: req.params.username
        },
        attributes: ['id'],
        include: [
            {
                model: Weapon,
            },
            {
                model: Armor
            }
        ]
    })

    const weaponData = await Weapon.findAll({
        where: {
            user_id: user.id
        },
        include: [
            {
                model: User,
                attributes: ['username', 'platform']
            }
        ],
        order: [
            ['mainEffect', 'ASC']
        ]
    })

    const armorData = await Armor.findAll({
        where: {
            user_id: user.id
        },
        include: [
            {
                model: User,
                atrributes: ['username', 'platform']
            }
        ],
        order: [
            ['mainEffect', 'ASC']
        ]
    })

    const weapons = weaponData.map(weapon => weapon.get({ plain: true }));
    const armor = armorData.map(armor => armor.get({ plain: true }));

    res.render('userSearch', { weapons, armor })
})

module.exports = router;