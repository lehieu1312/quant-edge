var express = require('express');
var router = express.Router();
var libData = require('../lib/data');


router.get('/', (req, res) => {
    try {
        var dataTransaction = libData.transactionPrice;
        res.json({ status: 200, msg: "Success", dataTransaction: dataTransaction });
    } catch (error) {
        res.json({ status: 201, msg: error + '' });
    }
});


module.exports = router;