const { Weapon } = require('../models');

const weaponData = [
    {
        mainEffect: 'Anti-Armor',
        majorEffect: '+10% damage while aiming',
        minorEffect: '+1 Agility',
        weaponType: 'Broadsider',
        capsValue: 1250,
        user_id: 1
    },
    {
        mainEffect: "Berserker's",
        majorEffect: '+50% limb damage',
        weaponType: 'Pole Hook',
        capsValue: 275,
        user_id: 1
    },
    {
        mainEffect: 'Bloodied',
        majorEffect: '+33% VATS hit chance',
        minorEffect: '+1 Perception',
        weaponType: 'Harpoon Gun',
        capsValue: 1250,
        user_id: 1
    },
    {
        mainEffect: "Executioner's",
        majorEffect: 'Bashing damage increased by 40%',
        minorEffect: 'Your V.A.T.S critical meter fills 15% faster',
        weaponType: 'Fat Man',
        capsValue: 1325,
        user_id: 1
    },
    {
        mainEffect: "Executioner's",
        majorEffect: '+10% damage while aiming',
        minorEffect: '25% less V.A.T.S Action Point cost',
        weaponType: 'Ultracite Laser Pistol',
        capsValue: 875,
        user_id: 1
    },
    {
        mainEffect: "Executioner's",
        majorEffect: '+33% VATS hit chance',
        minorEffect: '15% faster reload',
        weaponType: 'Gatling Gun',
        capsValue: 1250,
        user_id: 1
    },
    {
        mainEffect: "Executioner's",
        majorEffect: '+33% VATS hit chance',
        minorEffect: '+1 Agility',
        weaponType: '.44 Pistol',
        capsValue: 675,
        user_id: 1
    },
    {
        mainEffect: "Exterminator's",
        majorEffect: '+50% limb damage',
        minorEffect: '90% reduced weight',
        weaponType: 'Power Fist',
        capsValue: 750,
        user_id: 1
    },
    {
        mainEffect: "Exterminator's",
        majorEffect: '25% faster fire rate',
        minorEffect: 'Your V.A.T.S. critical meter fills 15% faster',
        weaponType: 'Ultracite Gatling Laser',
        capsValue: 1000,
        user_id: 1
    },
    {
        mainEffect: 'Furious',
        majorEffect: '25% faster fire rate',
        weaponType: 'Missile Launcher',
        capsValue: 500,
        user_id: 1
    },
    {
        mainEffect: 'Furious',
        majorEffect: '40% faster swing speed',
        minorEffect: '+1 Endurance',
        weaponType: 'Pickaxe',
        capsValue: 750,
        user_id: 1
    },
    {
        mainEffect: 'Furious',
        majorEffect: '+33% VATS hit chance',
        weaponType: 'Flamer',
        capsValue: 750,
        user_id: 1
    },
    {
        mainEffect: 'Furious',
        majorEffect: '+10% damage while aiming',
        weaponType: 'Laser Pistol',
        capsValue: 475,
        user_id: 1
    },
    {
        mainEffect: 'Furious',
        majorEffect: '+10% damage while aiming',
        minorEffect: '+50 Damage Resistance while aiming',
        weaponType: 'Plasma Pistol',
        capsValue: 600,
        user_id: 1
    },
    {
        mainEffect: "Ghoul Slayer's",
        majorEffect: 'V.A.T.S. critical shots do 50% damage',
        minorEffect: 'Your V.A.T.S. critical meter fills 15% faster',
        weaponType: 'Broadsider',
        capsValue: 875,
        user_id: 1
    }, 
    {
        mainEffect: 'Anti-Armor',
        majorEffect: 'V.A.T.S. critical shots do 50% damage',
        weaponType: 'Submachine Gun',
        capsValue: 500,
        user_id: 2
    },
    {
        mainEffect: "Berserker's",
        majorEffect: 'Bullets explode for area damage',
        weaponType: '50 Cal Machine Gun',
        capsValue: 750,
        user_id: 2
    }
]

const seedWeapons = () => Weapon.bulkCreate(weaponData);

module.exports = seedWeapons;