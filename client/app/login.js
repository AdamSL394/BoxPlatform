$(document).on("click",".login",function (req,res){
    let emailName = $("#user-email").val()
    localStorage.setItem("email", emailName);
})