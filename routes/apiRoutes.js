// because the routes are created somewhere else than the main server we have to initialize what we need here then export
const router = require("express").Router();
// require express then call Router function on it
//router creates a new ROUTER OBJECT that we can use

// adding routes
//TODO: route for saving activity data
//TODO: route for getting activity data by duration
//TODO: route for getting activity data

router.get("/", (request, response) => {});

// then we export it to the main file
module.exports = router;
