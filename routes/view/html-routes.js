const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const boxSDK = require('box-node-sdk');
const configJSON = JSON.parse(fs.readFileSync('./config.json'));
const sdk = boxSDK.getPreconfiguredInstance(configJSON);
const scopes = 'base_preview item_download base_upload';
const folderId = '0'
const resource = `https://api.box.com/2.0/folders/${folderId}`
const client = sdk.getAppAuthClient('enterprise');

router.get("/api/home", function (req, res) {
    createAppUser()
    client.exchangeToken(scopes, resource).then((tokenInfo) => {
        let accessToken = (tokenInfo.accessToken)
        res.json(accessToken);
    }).catch((err) => {
        console.error(err);
    });
});

router.get("/client", function (req, res,callback) {
        client.exchangeToken(scopes, resource).then((tokenInfo) => {
            let accessToken = (tokenInfo.accessToken)
            res.json(accessToken);
        }).catch((err) => {
            console.error(err);
        });
});

router.post(`/client:id`,function(req,res){
    let a = (Object.values(req.params))
    console.log(a)
    client.folders.create('0', `${a}`)
    .then(folder => {
        res.send(folder.id)
    })
})

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/app/login.html"));
})


function getAllClient() {
    client.users.get(client.CURRENT_USER_ID)
        .then(user => {
            console.log('Hello', user, '!')
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
    const userName = 'Adam Lehrer2';
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
        console.log(res)
    }
}
function addClient() {
    client.enterprise.addAppUser('Test', { external_app_user_id: 'external-id' })
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
            let a = (collection);
            console.log(a)
            // uploadFilePromise(a)
        });

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


module.exports = router;