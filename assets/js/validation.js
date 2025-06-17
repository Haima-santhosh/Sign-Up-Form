document.addEventListener('DOMContentLoaded', function () { 
   const form = document.querySelector('.needs-validation'); 
   form.addEventListener('submit', function (event) { 
   const password = document.getElementById('password'); 
   const confirmPassword = 
document.getElementById('confirmPassword'); 
   if (password.value !== confirmPassword.value) { 
       confirmPassword.setCustomValidity('Passwords do not match'); 
   } else { 
       confirmPassword.setCustomValidity(''); 
   } 
   //IF FORM IS NOT VALIDATED
   if (!form.checkValidity()) { 
     event.preventDefault(); 
     event.stopPropagation(); 
      form.classList.add('was-validated'); 
 
   }
   // FORM IS VALIDATED 
   else{
      event.preventDefault(); 
      form.reset()
         form.classList.remove('was-validated'); 
        //  alert("success")

    
          const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
   }
  
   }); 
 });