let inputCPF = document.getElementById("cpfUsuario")
let inputTel= document.getElementById("telUsuario")
let inputEmail= document.getElementById("emailUsuario")
let inputConfirmaremail= document.getElementById("confirmarEmail")
let inputSenha= document.getElementById("senha")
let inputConfirmarSenha= document.getElementById("confirmasenha")
let inputCep= document.getElementById("cepUsuario")
let inputBairro= document.getElementById("bairroUsuario")
let  inputEstado = document.getElementById("estadoUsuario")
let  inputEndereco = document.getElementById("endUsuario")
let inputCidade = document.getElementById("cidUsuario")
let config = {
    method: "get"
    }


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

inputCep.addEventListener('keyup',(e)=>{
    if(isNaN(inputCep.value)) {  
        inputCep.value = inputCep.value.substring(0, (inputCep.value.length -1))
         console.log(inputCep.value)
 }
 if(inputCep.value.length>=8) {  
    inputCep.value = inputCep.value.substring(0,8)
      buscarCep(inputCep.value)
 }
 })

function buscarCep(cep){
    fetch(`http://viacep.com.br/ws/${cep}/json/unicode/`)
    .then(response =>response.json())
    .then(dados=>{
        if(dados.erro){
            return inputCep.setAttribute("class","form-controlis-invalid")
        }
        else{
        inputCep.setAttribute("class","form-control is-valid")
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade
        inputEndereco.value = dados.logradouro
        
    }})
    
}