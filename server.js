const { app } = require("./app.js");

const PORT = app.get("port");
app.listen(PORT, () => {
  console.log(`[NODE] Server is started on port ${PORT}.`);
});
