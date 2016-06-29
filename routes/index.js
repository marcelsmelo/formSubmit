var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data: req.query});
});

router.post('/', function(req, res, next){
  console.log('teste');
  res.render('index', {data: req.body});
});

module.exports = router;
