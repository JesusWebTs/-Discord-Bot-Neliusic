const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

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

  server.listen(port, host, () => {
    console.log(`Server running at port: ${port} in ${host}`);
    console.log(`[Node] Neliusic started`);
  });
};

module.exports = runServer;
