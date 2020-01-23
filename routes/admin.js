const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('Add product middleware!');
    res.sendfile(path.join(rootDir, 'views', 'add-product.html'));
});

router.get('/api', (req, res, next) => {
    console.log('Add product middleware!');
    res.json({Name: 'Tanner', Age: 25, Hobbies: ['Video Games', 'Snowboarding', 'Web Design']}).sendfile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
  

module.exports = router;