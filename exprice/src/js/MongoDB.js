var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";

MongoClient.connect(url, function (err, db) {
  Promise(function (resolve, reject) {
    resolve(function () {
      console.log("数据库已创建!");
      db.close();
    });
    reject(err)
  });
}, { useNewUrlParser: true });