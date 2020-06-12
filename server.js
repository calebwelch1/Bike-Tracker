const express = require("express");
const moment = require("moment");

const PORT = 8080;

app = express();

app.listen(PORT, (request, response) => {
  console.log(`Server is listening at localhost:${PORT}`);
});
// the above we always need express/ app = express () and app.listen(port)

// bring in external routes
const apiRoutes = require("./routes/apiRoutes");
// use them
//same for html routes
const htmlRoutes = require("./routes/htmlRoutes");
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
