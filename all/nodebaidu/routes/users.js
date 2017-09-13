var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'baidunews'
})
/* 后台数据动态增加 */
router.get('/getnews', function(req, res, next) {

    connection.query('SELECT*FROM `news`', function(err, rows) {
        res.json(rows);
    })

});
//修改
router.post('/update', function(req, res) {
    var newsid = req.body.newsid,
        newstype = req.body.newstype,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newstitle=req.body.newstitle;
    connection.query('UPDATE `news` SET `newstype`=?,`newstime`=?,`newstitle`=?,`newsimg`=? WHERE `newsid`=?', [newstype, newstime, newstitle, newsimg, newsid], function(err,rows) {
res.json(newsid);
    })
});

//获取当前的新闻
router.get('/curnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT*FROM `news` WHERE newsid=?', [newsid], function(err, rows) {
        res.json(rows);
    })

});
//删除
router.post('/delete',function(req,res){
var newsid=req.body.newsid;
connection.query('DELETE FROM `news` WHERE `news`.`newsid`=?',[newsid],function(err,rows){
res.json(newsid);
})
});
//添加新闻
router.post('/insert',function(req,res){

      var  newstype = req.body.newstype,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newstitle=req.body.newstitle;
        connection.query('INSERT INTO `news`( `newstype`, `newstime`, `newstitle`, `newsimg`) VALUES (?,?,?,?)',[newstype,newstime,newstitle,newsimg],function(err,rows){
res.json(newstype);
        })
})
module.exports = router;