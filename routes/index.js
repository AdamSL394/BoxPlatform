const router = require("express").Router();
// const clientRoutes = require("./view/client-routes.js")
const viewRoutes = require("./view/html-routes.js");



router.use('/', viewRoutes);


module.exports = router;