const http = require('http');

// create server obj
http
  .createServer((req, res) => {
    //write response
    res.write('Hello World');
    res.end();
  })
  .listen(3000, () => console.log('Server running...'));
