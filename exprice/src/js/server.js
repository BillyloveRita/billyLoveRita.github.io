let http = require('http');
// let qs = require('querystring');

let server = http.createServer(function (req, res) {
  let body = '';  // 一定要初始化为"" 不然是undefined
  req.on('data', function (data) {
    body += data; // 所接受的Json数据
  });
  req.on('end', function () {
    res.writeHead(200, {  // 响应状态
      "Content-Type": "application/json",  // 响应数据类型
      'Access-Control-Allow-Origin': 'http://localhost:8080'  // 允许任何一个域名访问
    });
    console.log(JSON.parse(body).data)
    var json = JSON.stringify({
      result: JSON.parse(body).data == 'food' ? 1 : 0,
      resultContent: { name: 'apple' }
    });
    if (JSON.parse(body).data == 'food') {
      res.end(json);
    } else {
      res.end(json);
    }
  });
});

server.listen(3000);