const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("This is our short history");
  }
  res.end(`<h1>Oops!!</h1>
  <p>The page you are looking doesn't exist</p>
  <a href='/'>back to home</a>`);
});

server.listen(5000);
