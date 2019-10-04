var router = require("express").Router();
var path = require("path");
const fs = require("fs");
const boxSDK = require('box-node-sdk');
const configJSON = JSON.parse(fs.readFileSync('./config.json'));
const sdk = boxSDK.getPreconfiguredInstance(configJSON);
const scopes = 'base_preview item_download base_upload';
const folderId = '0'
const resource = `https://api.box.com/2.0/folders/${folderId}`
const client = sdk.getAppAuthClient('enterprise');

router.get("/api/home", function (req, res, callback) {
    console.log("hi ive been hit",res)
    client.exchangeToken(scopes, resource).then((tokenInfo) => {
        let accessToken = (tokenInfo.accessToken)
        console.log(accessToken)
        // res.render(accessToken) 
        // res.render('contentExplorer', { at: tokenInfo.accessToken, fid: folderId });
        res.json(accessToken);
        // res.sendFile(path.join(__dirname, "../../client/app/home.html"));
    }).catch((err) => {
        console.error(err);
    });
});

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/app/login.html"));
})

module.exports = router;