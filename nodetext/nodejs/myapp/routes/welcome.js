var express = require('express');
var router = express.Router();
var func = require('../inc/function.js');

/* canvas 列表页面 */
router.get('/', function(req, res, next) {
  res.render('welcome', func.PageHeadInfor('我的导航','我的导航','我的导航',4));
});


module.exports = router;
