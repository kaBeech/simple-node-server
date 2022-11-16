var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', { title: 'Contact Me!', message: 'You can contact me!' });
});

module.exports = router;
