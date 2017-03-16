/**
 * @file 建立httpServer
 * @author <huangjiandong>
 */

let http = require('http');
let qs = require('querystring');

http.createServer((req, res) => {
    if ('/' === req.url) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end([
            '<form method="POST" action="/url">'
            , '<h1>My form</h1>'
            , '<label>Personal information</label>'
            , '<p>What is your name?</p>'
            , '<input type="text" name="name">'
            , '<p><button>Submit</button></p>'
            , '</form>'
        ].join(''));
    } else if ('/url' === req.url && 'POST' === req.method) {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<p>Your name is <b>' + qs.parse(body).name + '</b></p>');
        });
    } else {
        res.writeHead(404);
        res.end('<b>404</b> Not Found');
    }
}).listen(3000);



