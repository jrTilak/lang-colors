const express = require("express");
const router = express.Router();
const langInfo = require("./assets/langs.json");

// convert keys of langInfo to lower case
const lowerCaseLangInfo = {};
for (const lang in langInfo) {
  lowerCaseLangInfo[lang.toLowerCase()] = langInfo[lang];
}

router.get("/:lang", function (req, res) {
  const lang = req.params.lang.toLowerCase();
  const langData = lowerCaseLangInfo[lang];
  if (langData) {
    res.json({
      status: 200,
      color: langData,
    });
  } else {
    res.json({
      status: 404,
      message: "Language not found!",
    });
  }
});

module.exports = router;
