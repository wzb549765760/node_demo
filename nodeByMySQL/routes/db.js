//db.js
// 连接MySQL
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});

var query = function (sql, callback) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
};
//
// function query(sql, callback) {
//     pool.getConnection(function (err, connection) {
//         // Use the connection
//         connection.query(sql, function (err, rows) {
//             callback(err, rows);
//             connection.release();//释放链接
//         });
//     });
// }
function dataHandle(err,rows,opeara) {
    var obj = {};
    if(err) {
        obj["dataFlag"] = false;
        obj["message"] = opeara+"失败";
    } else {
        obj["dataFlag"] = false;
        obj["message"] = opeara+"成功";
        obj["data"] = JSON.stringify(rows);
    }
    return obj;
}
exports.query = query;
exports.dataHandle = dataHandle;