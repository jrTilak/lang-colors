const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5678;


//website homepage
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/web/index.html"));
});

//website docs
app.get("/docs/:v", function (req, res) {
  // send file if exists otherwise send 404
  const versions = ["v1"];
  const v = req.params.v;

  if (versions.includes(v)) {
    res.sendFile(path.join(__dirname + `/docs/${v}/index.html`));
  } else {
    res.status(404).sendFile(path.join(__dirname + "/web/404.html"));
  }
});

// /api
app.use("/api", require("./routes/route.js"));

// v1 routes
app.use("/api/v1", require("./routes/v1/route.js"));
app.use("/api/v1/lang", require("./routes/v1/lang.js"));

// app starts
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
