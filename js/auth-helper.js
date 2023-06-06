function user() {
    return JSON.parse(localStorage.getItem("user"));
}
function token() {
    return localStorage.getItem("token");
}


//make sure the user is logged in
if (token() == null) {
    window.location.href = "login.html";
}


$(document).ready(function () {
    $.get('sidemenu.html', function (data) {
        $('#sidemenu').html(data);
    });

    $.get('topnav.html', function (data) {
        $('#topnav').html(data);
        $('#topnav').css({
            'overflow': 'auto',
        });
        $('#user').html(user().name)
    });
});