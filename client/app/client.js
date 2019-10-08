$(document).on("ready", function (req, res) {
    $.get("/client", function (req,res) {
    }).then(function (response) {
        var folderId = '0';
        var accessToken = `${response}`;
        var contentExplorer = new Box.ContentExplorer();
        contentExplorer.show(folderId, accessToken, {
            container: '.container'
        });
    })
})