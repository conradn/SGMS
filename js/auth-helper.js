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