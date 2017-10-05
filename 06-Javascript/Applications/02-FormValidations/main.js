window.addEventListener("load", init);

var userName;
var userMail;
var pwd;
var conf_pwd;

function init(){
    userName = document.getElementById("userName");
    userMail = document.getElementById("userMail");
    pwd = document.getElementById("pwd");
    conf_pwd = document.getElementById("conf_pwd");
    document.getElementById("form").addEventListener("submit", checkAll);
    
    userName.addEventListener("blur", blankCheck);
    pwd.addEventListener("keyup", pwdStrength);
    conf_pwd.addEventListener("keyup", confPwd);
}

function checkAll(){
    if(userName.value == "" || userMail.value == "" || pwd.value == "" || conf_pwd.value == "") {
        event.preventDefault();
        userName.style.border = "1px solid red";
        userMail.style.border = "1px solid red";
        pwd.style.border = "1px solid red";
        conf_pwd.style.border = "1px solid red";
    }
    
}

function blankCheck(){
    if(userName.value == ""){
        document.getElementById("err_1").innerHTML = "Cannot leave this field blank";
        event.srcElement.style.border = "1px solid red";
    }
    else {
        document.getElementById("err_1").innerHTML = "";
        event.srcElement.style.border = "1px solid green";
    }
}

function pwdStrength(){
    var span = document.getElementById("err_3");
    if(pwd.value.length <= 0){
        span.innerHTML = "This field is required";
        event.srcElement.style.border = "1px solid red";
    }
    else if(pwd.value.length > 0 && pwd.value.length <= 4){
        span.innerHTML = "Weak Password";
        span.style.color = "red";
    }
    else if(pwd.value.length > 4 && pwd.value.length <= 8){
        span.innerHTML = "Good Password";
        span.style.color = "yellow"
    }
    else {
        span.innerHTML = "Strong Password";
        span.style.color = "green";
    }
}

function confPwd(){
    var span = document.getElementById("err_4")
    if(pwd.value == conf_pwd.value) {
        span.innerHTML = "Password Match";
    }
    else {
        span.innerHTML = "Password donot match";
    }
}