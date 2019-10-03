const boxSDK = require('box-node-sdk');
const fs = require('fs');
const express = require("express")
const PORT = process.env.PORT || 3000
const app = express()
// const routes = require("./routes")


// Fetch config file for instantiating SDK instance
const configJSON = JSON.parse(fs.readFileSync('./config.json'));

// Instantiate instance of SDK using generated JSON config
const sdk = boxSDK.getPreconfiguredInstance(configJSON);

const client = sdk.getAppAuthClient('enterprise');

app.use(express.static("app"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

function getAllClient() {
  client.users.get(client.CURRENT_USER_ID)
    .then(user => {
      console.log('Hello', user.name, '!')
      // .catch(err => console.log('Got an error!', err));
    })
}


function uploadFilePromise() {

  var stream = fs.createReadStream('/Users/adam/Desktop/Desktop/CoverLetter.docx');
  var folderID = "0";
  client.files.uploadFile(folderID, 'Name1', stream)
    .then(file => console.log('Hello', file, '!'))
    .catch(err => console.log('Got an error mate!', err));
  console.log(client)
}

function createAppUser() {
  // Set app user details
  const userName = 'Adam Lehrer1';
  const spaceAmount = 1073741824;

  client.enterprise.addAppUser(
    userName,
    {
      space_amount: spaceAmount
    },
    callback
  );

  function callback(err, res) {
    if (err) throw err;
    // console.log(res)
  }
}
app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
})
