let incluirCarrinho = document.getElementById("btnIncluir");
let carrinho = document.getElementById('carrinho');

incluirCarrinho.addEventListener('click', () => {
    let elemento = carrinho.children[0].children[1].textContent;

    let recebe = `<span id="contador" class="badge badge-dark rounded-circle">${elemento++}</span>`



})




// function TestaCPF(strCPF) {
//     let Soma;
//     let Resto;
//     Soma = 0;
//     if (strCPF == "00000000000") return false;

//     for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
//     Resto = (Soma * 10) % 11;

//     if ((Resto == 10) || (Resto == 11)) Resto = 0;
//     if (Resto != parseInt(strCPF.substring(9, 10))) return false;

//     Soma = 0;
//     for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
//     Resto = (Soma * 10) % 11;

//     if ((Resto == 10) || (Resto == 11)) Resto = 0;
//     if (Resto != parseInt(strCPF.substring(10, 11))) return false;
//     return true;
// }