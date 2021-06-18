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
                attributes: ['username']
            }
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
                attributes: ['username']
            }
        ]
    })

    const weapons = weaponData.map(weapon => weapon.get({ plain: true }));
    const armor = armorData.map(armor => armor.get({ plain: true }));

    res.render('search', {
        weapons,
        armor
    })
})

module.exports = router;