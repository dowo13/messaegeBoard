const express = require('express');
const router = express.Router();


const messages = []
const date = new Date().toString()
let sd = date.split(' ')
const displayDate = [sd[0], sd[2], sd[1], sd[3], sd[4]].join(' ')

/* GET home page. */
router.get('/', (req, res, next) => {
  
  res.render('index', { title: 'Message Board', messages: messages });
});

// post new message
router.post('/new', (req, res, next) => {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: displayDate});
  res.redirect('/')
})




module.exports = router;
