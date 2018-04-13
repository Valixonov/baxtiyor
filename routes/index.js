var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    /*models.Messangers.findAll({
        include: [models.Messangers, models.Users],
        raw: true
    }).then(function (banks) {
        res.json(banks);
        console.log(JSON.parse(banks))
        // res.render('index', { title: banks.length,banks:banks });
    });*/
   /* models.Users.findAll({
        include: [
            models.Messangers
        ],

    }).then(function (mess) {
        var f = JSON.parse(JSON.stringify(mess));
            res.json({
                error: false,
                data: f[0].Messangers.length
            })
        }
    ).catch(function (error) {
        res.json({
            error: true,
            data: [],
            error_message: error
        })
    });
*/
    res.render('index', { title: "start" });
});

module.exports = router;
