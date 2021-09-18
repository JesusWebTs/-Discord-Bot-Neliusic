const http = require("http");

const port = process.env.PORT;

const runServer = () => {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Neliusic is Started");
  });

  server.listen(port, () => {
    console.log(`Server running at port: ${port}`);
    console.log(`[Node] Neliusic started`);
  });
};

module.exports = runServer;
