var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {data: req.query});
});

router.post('/', function(req, res, next){
  res.render('formPost', {dataForm: req.body});
});

module.exports = router;
