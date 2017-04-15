var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
    // get bisa dikirim melalui query atau param
    //post bisa dikirim melalui  payload
    console.log(req.query.first_name);
    console.log(req.query.last_name);
    db.User.findAll()
        .then(users => {
            res.render('index', { // index ialah nama file dlm folder views
                title: 'Express',
                users: users
            })
        })
        .catch(err => {
            console.log(err.message)
        })
});

// cara buat routing baru
router.get('/about', (req, res, next) => {
    res.send('ini halaman about')
})

//kalo alamat router sama dgn method http yg berbeda maka akan dianggap sbagai routing yg berbeda
// kalo post pake body
router.post('/', (req, res, next) => {
    console.log(req);
    console.log(JSON.stringify(req.body, null, 2));
    res.send('request diterima')
})

module.exports = router;