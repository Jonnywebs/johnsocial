const savedData = localStorage.getItem('fifthData');
    document.getElementById('email').value = savedData;
    
    function loginSubmit() {
    const savedPassword = localStorage.getItem('sixthData');
    const passwordLogin = document.getElementById('password').value;
    const emailLogin = document.getElementById('email').value;
    if(savedData != emailLogin){
    document.getElementById("cancel").style.display= "block"
    document.getElementById("alert").style.display = "flex"
    document.getElementById("alert-background").style.display = "flex "
    return false
    }
    else if( savedPassword != passwordLogin){
    document.getElementById("cancel1").style.display= "block"
     document.getElementById("alert-background1").style.display = "flex"
    document.getElementById("alert1").style.display = "flex"
    return false
    }
    else{
    return true;
    }
    };
    
    function myAlert(){
    document.getElementById("cancel").style.display = "none";
    document.getElementById("alert").style.display= "none";
    document.getElementById("alert-background").style.display= "none";
    }
    
    function firstAlert(){
    document.getElementById("cancel1").style.display = "none";
    document.getElementById("alert1").style.display= "none";
    document.getElementById("alert-background1").style.display= "none";
    }
    
    function myIcon() {
    document.querySelector(".password").type = "text"
    document.querySelector('.img').style.display = 'none';
    document.querySelector('.img1').style.display = 'inline-block'
    }
    function myIcons() {
    document.querySelector(".password").type = "password";
    document.querySelector('.img').style.display = 'inline-block';
    document.querySelector('.img1').style.display = 'none'
    }
   
    
    
    
    