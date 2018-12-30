/**
 * Created by wuzhibin on 2018/12/19.
 */
var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('student/index', { title: 'Express' });
});

router.post('/getListById',function (req,res) {
    var id = req.body.id;
    console.log(id);
    db.query("select * from student where id = " + id,function (err, rows) {
        if(err) {
            res.end('查询失败：' + err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            // res.end(rows);
            res.end(JSON.stringify(rows));
        };
    })
});


router.post('/getList',function (req,res) {
    db.query("select * from student where status = '1'",function (err, rows) {
        if(err) {
            res.end('查询失败：' + err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            // res.end(rows);
            res.end(JSON.stringify(rows));
        };
    });
});

router.post('/addPerson',function (req,res) {
    var name = req.body.name+"" ;
    var age = Number(req.body.age);
    var sex = req.body.sex+"";
    console.log(name);
    console.log(age);
    console.log(sex);
    db.query("insert into student(name,age,sex,status) values('"+name+"','"+age+"','"+sex+"','1')", function(err, rows) {
        var obj = {};
        console.log(err);
        if(err) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            obj["flag"] = false;
            obj['message'] = "新增失败";
            res.end(JSON.stringify(obj));
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            obj["flag"] = true;
            obj['message'] = "新增成功";
            res.end(JSON.stringify(obj));
        };
    });
});

router.post('/delPerson',function (req,res) {
    var id = req.body.id;
    db.query("update student set status = '0' where id =" +id,function (err,rows) {
        var obj = {};
        if(err) {
            obj["flag"] = false;
            obj['message'] = "删除失败";
            res.end(JSON.stringify(obj));
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            obj["flag"] = true;
            obj['message'] = "删除成功";
            res.end(JSON.stringify(obj));
        }
    })
});

router.post('/updatePerson',function (req,res) {
    var id = req.body.id;
    var name = req.body.name+"" ;
    var age = Number(req.body.age);
    var sex = req.body.sex+"";
    console.log(id);
    console.log(name);
    console.log(age);
    console.log(sex);
    db.query("update student set name ='"+name+"',age ='"+age+"',sex ='"+sex+"' where id =" +id,function (err,rows) {
        var obj = {};
        console.log(err);
        if(err) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            obj["flag"] = false;
            obj['message'] = "修改失败";
            res.end(JSON.stringify(obj));
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            obj["flag"] = true;
            obj['message'] = "修改成功";
            res.end(JSON.stringify(obj));
        }
    })
});


module.exports = router;