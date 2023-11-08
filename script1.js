function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "mabim" && password == "mabim") {
        if (confirm("Apakah anda ingin login ?")== true) {
            window.location.href ="https://github.com/rojoro1";
        } else {
            alert("membatalkan login !");
        } 
    } else {
        if (done==0) {
            alert("username/passoword salah");
        }
    }
}