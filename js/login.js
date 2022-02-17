document.getElementById('login-submit').addEventListener('click', function(){
   const emailField = document.getElementById('user-email');
   const EmailField = emailField.value;
   const passField = document.getElementById('user-pass');
   const PassField = passField.value;
   if(EmailField== 'dharmunna1504@gmail.com' && PassField =='munna' )
   {
       window.location.href = 'banking.html';
   }
});

//handle deposite button

