// $(document).on("click", "signUp", function () {
//     $("")
// })

// $(document).on("click",".auth-btn",function(event) {
//     event.preventDefault();
//     $('#auth-form')[0].reportValidity();

//     var action = $(this).text().toLocaleLowerCase().trim();
// console.log(action)

//     if ($('#auth-form')[0].checkValidity()) {
//         var user = {
//             email: $('#user-email').val(),
//             local_pw: $('#user-password').val()
//         }

//         setTimeout(
//             function () {
//                 switch (action) {
//                     case 'sign up':
//                         signup(user);
//                         break;
//                     case 'login':
//                         login(user)
//                         break;
//                     default:
//                         return
//                 }

//             }, 1000);
//     } else {
//         return
//     }
// });

// function signup(payload) {
//     $.post('/api/signup', payload, function (response) {
//         console.log(payload)
//         console.log(response);
//         if (response.success) {
//             location.reload();
//         }
//         else {
//             displayMSG(response);
//         }
//     });
// }

// function login(payload) {
//     $.post('/api/auth/login', payload, function (response) {
//         console.log(payload)
//         console.log(response);
//         if (response.success) {
//             location.reload();
//         }
//         else {
//             displayMSG(response);
//         }
//     });
// }


$(".login").on("click", function (req, res){
    let emailName = $("#user-email").val()
    console.log(emailName)
    localStorage.setItem("email", emailName);
})