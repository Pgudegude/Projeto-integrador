let inputCPF = document.getElementById("cpfUsuario")
let inputTel= document.getElementById("telUsuario")
let inputEmail= document.getElementById("emailUsuario")
let inputConfirmaremail= document.getElementById("confirmarEmail")
let inputSenha= document.getElementById("senha")
let inputConfirmarSenha= document.getElementById("confirmasenha")



inputCPF.addEventListener("keyup",(event)=>{  
    if(isNaN(inputCPF.value)){              
    inputCPF.value= inputCPF.value.substring(0,(inputCPF.value.length-1));     // so digita numeros

    }    if(inputCPF.value.length>=11){
    inputCPF.value=inputCPF.value.substring (0,11); 
}
})
inputTel.addEventListener("keyup",(event)=>{  
    if(isNaN(inputTel.value)){                                                  
    inputTel.value= inputTel.value.substring(0,(inputTel.value.length-1));     // so digita numeros

    }    if(inputTel.value.length>=11){
    inputTel.value=inputTel.value.substring (0,11); 
}
})


inputConfirmaremail.addEventListener("keyup",(e)=>{
    if(inputConfirmaremail.value != inputEmail.value){
        inputConfirmaremail.setAttribute('class','form-control is-invalid')      // confirmar se os emails estao certos 
    } else{
        inputConfirmaremail.setAttribute ('class', 'form-control is-valid')
    }
})
inputConfirmarSenha.addEventListener("keyup",(se)=>{
    if(inputConfirmarSenha.value != inputSenha.value){
        inputConfirmarSenha.setAttribute('class','form-control is-invalid')  // confirmar se as senhas estão iguais
    } else{
        inputConfirmarSenha.setAttribute ('class', 'form-control is-valid')
    }
})


