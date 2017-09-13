var express = require('express');
var router = express.Router();
var mysql=require('mysql');
/* 百度新闻前台的获取 */
router.get('/', function(req, res, next) {
 var newstype=req.query.newstype;
 var connection=mysql.createConnection({
host:'localhost',
port:'3306',
user:'root',
password:'',
database:'baidunews'

 })
connection.connect();
connection.query('SELECT*FROM `news` WHERE `newstype`=?',[newstype],function(err,rows,fields){
res.json(rows);
})


});

module.exports = router;
