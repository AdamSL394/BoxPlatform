$(document).on("ready", function (req, res) {
    let userEmail = (localStorage.getItem("email"));
    console.log(userEmail)
    $.post(`/client: ${userEmail}`, function (req, res) {

    }).then(function (response) {
        let folderID = response
        $.get("/client", function () {
        }).then(function (response) {
            // console.log("please tell me this have some folder ids",response)
            var folderId = folderID;
            var accessToken = `${response}`;
            var contentExplorer = new Box.ContentExplorer();
            contentExplorer.show(folderId, accessToken, {
                container: '.container'
            });
        })
    });
})