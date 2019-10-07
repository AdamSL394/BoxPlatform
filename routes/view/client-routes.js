// const router = require("express").Router();
// var path = require("path");
// const fs = require("fs");
// const boxSDK = require('box-node-sdk');
// const configJSON = JSON.parse(fs.readFileSync('./config.json'));
// const sdk = boxSDK.getPreconfiguredInstance(configJSON);
// const scopes = 'base_preview item_download base_upload';

// // Create folder


// router.get("/client", function (req, res) {
//     const folderId = "0";
//     const resource = `https://api.box.com/2.0/folders/${folderId}`
//     const client = sdk.getAppAuthClient('enterprise');
//     const folderName = 'Application4';
//     client.folders.create(folderId, folderName);

//     client.exchangeToken(scopes, resource).then((tokenInfo) => {
//         let accessToken = (tokenInfo.accessToken)
//         res.json(accessToken);
//     }).catch((err) => {
//         console.error(err);
//     });
// });

// module.exports = router;