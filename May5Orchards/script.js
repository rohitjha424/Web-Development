function verifyPassword() {
    var pw = document.getElementById("pswd").value;
    //check empty password field
    if(pw == "") {
       document.getElementById("message").innerHTML = "**Fill the password please!";
       return false;
    }
   
   //minimum password length validation
    if(pw.length < 8) {
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
       return false;
    }
  
  //maximum length of password validation
    if(pw.length > 16) {
       document.getElementById("message").innerHTML = "**Password length must not exceed 16 characters";
       return false;
    }
    else{
        
        function myFunction() {
            window.open("login.html");
          }
          myFunction();
    } 
  } 



