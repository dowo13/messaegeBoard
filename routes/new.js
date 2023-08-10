const express = require('express');
const router = express.Router();

const messageArray = [];

// add new message
router.get('/', (req, res, next) => {
    res.render('form', {title: 'add message'});
})

module.exports = router;