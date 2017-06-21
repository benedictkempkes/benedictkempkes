var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Benedict Kempkes' });
});

/* GET Angular page*/
router.get('/angular', function(req, res, next) {
  res.render('angularViews/angular', { title: 'Persönlicher Blog' });
});

//router.get('/angular/:name', function(req, res){
//    var name = req.params.name;
//    res.render('angularViews/partials/' + name)
//})

/* GET React page*/
router.get('/react', function(req, res, next) {
  res.render('reactViews/react', { title: 'Ziel Verfolgung' });
});

module.exports = router;