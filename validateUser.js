function validateUser() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if(username == "admin" || password == "admin123") {
        return true;
    } else {
        alert("Invalid Credentials!!!");
        return false;
    }
}