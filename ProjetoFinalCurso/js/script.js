var modal = document.getElementById('id01');
var overlay = document.getElementById('overlay');
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

abrirPopup = () => {
  modal.style.display = "block";
  overlay.style.display = "block";
}

fecharPopup = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
}

let esqueceu = document.getElementById('btnSenha');


var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");
  
  function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
      confirm_password.setCustomValidity('');
    }
  }
  
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;