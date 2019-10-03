const boxSDK = require('box-node-sdk');
const fs = require('fs');
const express = require ("express")
const PORT = process.env.PORT || 3000
const app = express()
const routes = require("./routes")


// Fetch config file for instantiating SDK instance
const configJSON = JSON.parse(fs.readFileSync('./config.json'));

// Instantiate instance of SDK using generated JSON config
const sdk = boxSDK.getPreconfiguredInstance(configJSON);

const client = sdk.getAppAuthClient('enterprise');

