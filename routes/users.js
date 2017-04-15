var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

//halaman buat ambil semua users
// routing localhost/users/get
router.get('/get', (req, res, next) => {
    res.send('ini semua usernya')
})

// router.post('/add', (req, res, next) => {
//     console.log(JSON.stringify(req.body, null, 2));
//     res.send('request diterima')
// })

router.post('/add', (req, res, next) => {
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    db.User.create({
            'first_name': first_name,
            'last_name': last_name
        })
        .then(user => {
            // res.send('berhasil memasukkan data')     //ke halaman bau
            res.redirect('/') // untuk buat ke halaman lain
        })
        .catch(err => {
            console.log(err.message);
        })
})

module.exports = router;