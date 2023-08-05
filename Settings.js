   //BLOCKED CONTACT
    
    const blockedContact = document.querySelector('.blocked-contact');
    const blocked = document.querySelector('.blocked');
    const unblock1 = document.querySelector('.unblock1');
    const unblockFirst = document.querySelector('.info.first');
    const unblock2 = document.querySelector('.unblock2');
    const unblockSecond = document.querySelector('.info.second');
    const unblock3 = document.querySelector('.unblock3');
    const unblockThird = document.querySelector('.info.third');
    const numberBlocked = document.querySelector('.number')
    //SHOW AND UNBLOCK BLOCKED CONTACT
  blockedContact.addEventListener('click', () => {
  blocked.classList.toggle('block');
  numberBlocked.style.display = 'none'
  });
  unblock1.addEventListener('click', () => {
  unblockFirst.style.display = "none"
  });
  unblock2.addEventListener('click', () => {
  unblockSecond.style.display = "none"
  });
  unblock3.addEventListener('click', () => {
  unblockThird.style.display = "none"
  })
  
    //PASSWORD CHANGE
    const passwordSecurity = document.querySelector('.password-security');
    const passwordForm = document.querySelector('.password-form');
   
    //CHANGE PASSWORD
    passwordSecurity.addEventListener('click', () => {
        passwordForm.classList.toggle('display');
    });
    function passwordChange() {
    
    
 }
 
 
 
 
 function passwordChange() {
 const passwordConfirm = document.getElementById('confirm').value;
 const passwordNew = document.getElementById('new').value;
 const savedPassword = localStorage.getItem('sixthData');
 const passwordLogin = document.getElementById('password').value;
 if(passwordLogin != savedPassword){
 document.getElementById("cancel").style.display= "block"
 document.getElementById("alert-background").style.display = "flex"
 document.getElementById("alert").style.display = "flex"
 return false;
 }
 if(passwordConfirm != passwordNew){
 document.getElementById("cancel1").style.display= "block"
 document.getElementById("alert-background1").style.display = "flex"
 document.getElementById("alert1").style.display = "flex";
 return false;
 }
 else{
 document.getElementById("cancel2").style.display= "block"
 document.getElementById("alert-background2").style.display = "flex"
 document.getElementById("alert2").style.display = "flex";
 return false;
 }
 function secondAlert(){
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
    
    function secondAlert(){
    document.getElementById("cancel2").style.display = "none";
    document.getElementById("alert2").style.display= "none";
    document.getElementById("alert-background2").style.display= "none";
    }
             
             
             
    function myIcon1() {
    document.querySelector(".password").type = "text"
    document.querySelector('.img').style.display = 'none';
    document.querySelector('.imgs').style.display = 'inline-block'
    }
    function myIcons1() {
    document.querySelector(".password").type = "password";
    document.querySelector('.img').style.display = 'inline-block';
    document.querySelector('.imgs').style.display = 'none';
    }
    
    
    function myIcon2() {
    document.querySelector(".new-password").type = "text"
    document.querySelector('.img1').style.display = 'none';
    document.querySelector('.imgs1').style.display = 'inline-block'
    }
    function myIcons2() {
    document.querySelector(".new-password").type = "password";
    document.querySelector('.img1').style.display = 'inline-block';
    document.querySelector('.imgs1').style.display = 'none'
    }
    
    function myIcon3() {
    document.querySelector(".confirm-password").type = "text"
    document.querySelector('.img2').style.display = 'none';
    document.querySelector('.imgs2').style.display = 'inline-block';
    }
    
    function myIcons3() {
    document.querySelector(".confirm-password").type = "password";
    document.querySelector('.img2').style.display = 'inline-block';
    document.querySelector('.imgs2').style.display = 'none';
    }
  
  
 