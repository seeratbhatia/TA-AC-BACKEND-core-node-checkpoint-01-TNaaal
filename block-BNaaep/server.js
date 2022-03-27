let http = require('http');
let fs = require('fs');
let qs = require('querystring');
let server = http.createServer(handleRequest);
let url = require('url');

function handleRequest(req, res) {
  let store = '';
  let parsedUrl = url.parse(req.url, true);
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'GET' && req.url === '/') {
      fs.createReadStream('./index.html').pipe(res);
    } else if (req.method === 'GET' && req.url === '/about') {
      fs.createReadStream('./about.html').pipe(res);
    } else if (req.method === 'GET' && req.url === '/contact') {
      fs.createReadStream('./contact.html').pipe(res);
    }
  });
}
server.listen(5000, () => {
  console.log('server is listening on port:5000');
});