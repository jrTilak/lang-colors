const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Welcome to the Lang-Colors API!",
    docs: "https://lang-colors.thapatilak.com.np/",
  });
});

module.exports = router