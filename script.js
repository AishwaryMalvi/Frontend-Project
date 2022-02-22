function downloadcv(){
    window.alert("CV Downloaded Successfully");
}
function contact(){
    document.getElementById("conc").innerHTML = "Contact Number -: 9009602170";
}

function validation(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmpassword = document.getElementById('confirmpassword').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;

  var usercheck = /^[A-Za-z. ]{3,30}$/;
  var passwordcheck = /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])[a-zA-z0-9!!@#\$%\^&\*]{3,100}$/;
  var emailcheck = /^\W+([\.-]?\W+)*@W+([\.-]?\W+)*(\.\W{2,3})+$/;
  var mobilenumber = /^[789][0-9]{9}$/;

  if(usercheck.test(username)){
    document.getElementById("usererror").innerHTML = " ";
    
  }else{
    document.getElementById("usererror").innerHTML = "**invalid username";
    return false;
  }
  if(passwordcheck.test(password)){
    document.getElementById("passworderror").innerHTML = " ";

  }else{
    document.getElementById("passworderror").innerHTML = "**password is not valid";
    return false;
  }
  if(password.test(confirmpassword)){
    document.getElementById("confirmpassworderror").innerHTML = " ";
    
  }else{
    document.getElementById("confirmpassworderror").innerHTML = "**password is not match";
    return false;
  }
  if(emailcheck.test(email)){
    document.getElementById("email").innerHTML = " ";
  }else{
  document.getElementById("email").innerHTML = "**invalid email format";
    return false;
  }
  if(mobilenumber.test(number)){
    document.getElementById("numcheck").innerHTML = " ";
  }else{
    document.getElementById("numcheck").innerHTML = "**invalid input";
   return false;
  }
}