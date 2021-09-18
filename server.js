const http = require("http");

const port = process.env.PORT || 3000;

const runServer = () => {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        status: res.statusCode,
        statusMessage: "Neliusic is Started",
      })
    );
  });

  server.listen(port, () => {
    console.log(`Server running at port: ${port}`);
    console.log(`[Node] Neliusic started`);
  });
};

module.exports = runServer;
