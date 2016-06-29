var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data: req.query});
});

router.post('/', function(req, res, next){
  console.log('BODY', req.body);
  res.render('formPost', {dataForm: req.body});
});

module.exports = router;
