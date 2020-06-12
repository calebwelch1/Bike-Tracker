const router = require("express").Router();
// we need path!
const path = require("path");
// html route to homepage
router.get("/", (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "html", "index.html");
  response.sendFile(filePath);
});
module.exports = router;
