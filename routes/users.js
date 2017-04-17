var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/routing', function(req, res, next) {
  res.render('routing',{say:req.query.say});
});

router.get('/', function(req, res, next) {
  res.render('form',{judul:'FORM UBAH KATA'});
});
router.get('/:kata', function(req, res, next) {
  res.render('form',{judul:'FORM UBAH KATA',output:req.params.kata.toLowerCase()});
});

router.post('/', function(req, res, next) {
  var kata = req.body.kata
  res.redirect('/users/' + kata);
});

module.exports = router;
