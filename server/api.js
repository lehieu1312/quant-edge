var express = require('express');
var router = express.Router();
var libData = require('../lib/data');


router.get('/', (req, res) => {
    try {
        // Lấy dữ liệu mẫu từ file data.js
        var dataTransaction = libData.transactionPrice;
        // Trả về dữ liệu mẫu từ file data.json
        res.json({ status: 200, msg: "Success", dataTransaction: dataTransaction });
    } catch (error) {
        res.json({ status: 201, msg: error + '' });
    }
});


module.exports = router;