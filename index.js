const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
let filePath;
let contentType;

const server = http.createServer((req, res) => {
  //build file path using url

  //figure out file ext

  let extname = path.extname(req.url);

  if (extname === '') {
    filePath = path.join(
      __dirname,
      'public',
      (req.url === '/' ? 'index' : req.url) + '.html'
    );
  } else {
    filePath = path.join(__dirname, 'public', req.url);
  }

  if (extname === '.css') {
    contentType = 'text/css';
  } else {
    contentType = 'text/html';
  }

  console.log(filePath);
  console.log(contentType);
  //read file
  //file not found
  //server error
  //success
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
