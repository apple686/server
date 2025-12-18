var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ id: 1 });
});


/* POST home page. */
router.post('/', function (req, res, next) {
  res.json({ id: 1 });
});

module.exports = router;
