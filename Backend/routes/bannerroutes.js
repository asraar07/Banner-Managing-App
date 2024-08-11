// routes/bannerRoutes.js
const express = require('express');
const router = express.Router();
const { getBanner, updateBanner } = require('../controller/banner');

router.get('/banner', getBanner);
router.post('/update-banner', updateBanner);

module.exports = router;
