var router = require("express").Router();
var path = require("path");

var viewRoutes = require("./view/html-routes.js");


// html routes
router.use('/', viewRoutes);


// catch all
// router.use( function(req, res){ res.sendFile(path.join(__dirname, "/../public/404.html"))});

module.exports = router;