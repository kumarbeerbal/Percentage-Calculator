var email = document.getElementById("Email");
var password = document.getElementById("Password");
var authMessage = document.getElementById("message");

function signUp(){
    var appUsers = localStorage.getItem("users");
    console.log(appUsers);

    var existsUser = false;
    if(appUsers === null){
        appUsers = [];
    }
    else{
        appUsers = JSON.parse(appUsers);
        console.log(appUsers);
    }
    var userObject = {
        email:email.value,
        password:password.value
    }
    
    var emailValue = email.value;
    emailValue = emailValue.slice(emailValue.length-4);
    console.log(emailValue);
    if(emailValue !== ".com"){
        alert("enter valid email adress");
       }
       else{
    for(var i = 0; i < appUsers.length; i++){
        if(appUsers[i].email === email.value ){
            existsUser = true;
        }
    }
    if(existsUser === true){
        authMessage.innerHTML = "User already exists..";
    }
    else{
        appUsers.push(userObject);
        appUsers = JSON.stringify(appUsers);
        appUsers = localStorage.setItem("users",appUsers);
        email.value = "";
        password.value = "";
        authMessage.innerHTML = "Successfully Signup";
    }
}
}

function logIn(){
    var appUsers = localStorage.getItem("users");
    console.log(appUsers);
    if(appUsers === null){
        appUsers = [];
    }
    else{
        appUsers = JSON.parse(appUsers);
        // console.log(appUsers);
    }
    var logObject = {
        email:email.value,
        password:password.value
    }
    var existsUser = false;
    for(var i = 0; i < appUsers.length; i++){
        if(appUsers[i].email === email.value && appUsers[i].password === password.value){
           existsUser = true;
           var dataForm = document.getElementById("link1");
           dataForm.setAttribute("href", "calculator/percntClaculator.html");
        }
    }
    
    if(existsUser === true){
         var logData = JSON.stringify(logObject);
        localStorage.setItem("data",logData);
        email.value = "";
        password.value = "";
        authMessage.innerHTML = "Successfully login";
   }
    else{
        email.value = "";
        password.value = "";
        authMessage.innerHTML = "Login Failed";
    }

}