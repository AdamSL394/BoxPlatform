const boxSDK = require('box-node-sdk');
const fs = require('fs');
const express = require("express")
const PORT = process.env.PORT || 3000
const app = express()
const routes = require("./routes")
// Fetch config file for instantiating SDK instance
const configJSON = JSON.parse(fs.readFileSync('./config.json'));
// Instantiate instance of SDK using generated JSON config
const sdk = boxSDK.getPreconfiguredInstance(configJSON);


app.use(express.static("app"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

// clientId()
// downscopeToken()
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
function addClient() {
  client.enterprise.addAppUser('Daenerys Targaryen', { external_app_user_id: 'external-id' })
    .then(appUser => {
      console.log("hi ", appUser)
    });
}
function clientId() {
  client._useIterators = true;

  client.enterprise.getUsers({ limit: 1000 })
    .then((usersIterator) => {
      return autoPage(usersIterator);
    })
    .then((collection) => {
      // let a = (collection);
      // console.log(a)
      // uploadFilePromise(a)
    }, callback);

  function autoPage(iterator) {
    let collection = [];
    let moveToNextItem = () => {
      return iterator.next()
        .then((item) => {
          if (item.value) {
            collection.push(item.value);
          }
          if (item.done !== true) {
            return moveToNextItem();
          } else {
            return collection;
          }
        })
    }
    return moveToNextItem();
  }
}
// function downscopeToken(req, res) {
app.get("/",(req,res) => {
  console.log("hi")
  const scopes = 'base_preview item_download base_upload';
  // const folderId = 'FOLDER ID'
  const resource = null//`https://api.box.com/2.0/folders/${folderId}`
  // Perform token exchange to get downscoped token
  const client = sdk.getAppAuthClient('enterprise');
  client.exchangeToken(scopes, resource).then((tokenInfo) => {
    // Downscoped token available in tokenInfo.accessToken
  
    let accessToken = (tokenInfo.accessToken)
    return accessToken
  }, callback).catch((err) => {
    console.error(err);
  });
  // res.send(accessToken)
  // }

}

function callback(err, res) {
  console.log("hi")
  console.log(util.inspect(err, false, null));
  console.log(util.inspect("callback respose", res, false, null));
}

app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
})
