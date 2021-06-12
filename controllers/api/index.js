const router = require('express').Router();

const userRoutes = require('./userRoutes');
const armorRoutes = require('./armorRoutes');
const weaponRoutes = require('./weaponRoutes');

router.use('/users', userRoutes);
router.use('/armor', armorRoutes);
router.use('/weapons', weaponRoutes);

module.exports = router;