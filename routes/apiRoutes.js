// because the routes are created somewhere else than the main server we have to initialize what we need here then export
const router = require("express").Router();
// require express then call Router function on it
//router creates a new ROUTER OBJECT that we can use

const activities = [];

// adding routes
//TODO: route for saving activity data
router.post("/activities", (request, response) => {
  // get data then save the activity!
  //request.body is the data from the front end!
  // console.log(request.body);
  // object destructoring. Destructure initial object from front end to use as individual data args
  const { mileage, duration, date } = request.body;
  if (!mileage) {
    return response.json({
      success: false,
      message: "mileage is required",
    });
  }
  // response.json("save activity");
  console.log(mileage, duration, date);
  activities.push(request.body);
  response.json({ activities: activities, success: true });
});
//TODO: route for getting activity data by duration
//TODO: route for getting activity data

router.get("/", (request, response) => {});

// then we export it to the main file
module.exports = router;
