var router = require("express").Router();
var path = require("path");

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../../app/login.html"));

});

router.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, "../../app/home.html"));
})

router.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, "../../app/home.html"));
})

module.exports = router;