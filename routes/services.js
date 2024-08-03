// routes/services.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('services', { title: 'Our Services' });
});

module.exports = router;
