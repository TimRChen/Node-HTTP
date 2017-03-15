/**
 * @file 建立httpServer
 * @author <huangjiandong>
 */

require('http').createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    let stream = require('fs').createReadStream('img.jpg');
    stream.pipe(res);

}).listen(3000);

