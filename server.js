const http = require('http');

const HOST = 'localhost';
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Galvanize!');
}).listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
