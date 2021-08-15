document.getElementById('submit_btn').addEventListener('click', function(){

    const userEmail = document.getElementById('user_email');
    const email = userEmail.value;
    const userPass = document.getElementById('user_password');
    const pass = userPass.value;

    if(email =='main@gmail.com' && pass == 'main@@##00'){
       window.location.href ='banking.html';
    }
   
})