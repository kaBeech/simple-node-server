var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('info', { title: 'About', message: "Welcome to my page! This is a very basic website I am making to practice server implementation and routing in Node.JS using the express-generator" });
});

module.exports = router;
