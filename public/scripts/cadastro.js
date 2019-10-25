var email = document.querySelector("#email");
var cpf = document.querySelector("#cpf");
var botaosubmit = document.querySelector('#botao');
var senha = document.querySelector('#senha');
var reSenha = document.querySelector('#re-senha');


function validaCPF() {
    function TestaCPF(cpf) {
        var Soma;
        var Resto;
        Soma = 0;
        if (cpf == "00000000000") return false;
            
        for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
       
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10)) ) return false;
       
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
       
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
        return true;
    }
    cpf.addEventListener('blur', () => {
        valorCpf = cpf.value;
        validado = TestaCPF(valorCpf);
        if (validado) {
            cpf.classList.remove("incorreto");
            cpf.classList.add("correto");
        } else {
            cpf.classList.remove("correto");
            cpf.classList.add("incorreto");
        }
        if(valorCpf == 0) {
            cpf.classList.remove("correto");
            cpf.classList.remove("incorreto");
        }
    })
}

function validaSenhas() {
    senha.addEventListener('blur', ()=> {
        valorSenha = senha.value;
        valorReSenha = reSenha.value;
        if (valorSenha == valorReSenha) {
            senha.classList.remove("incorreto");
            reSenha.classList.remove("incorreto");
            senha.classList.add("correto");
            reSenha.classList.add("correto");
        } else {
            senha.classList.remove("correto");
            reSenha.classList.remove("correto");
            senha.classList.add("incorreto");
            reSenha.classList.add("incorreto");
        }
        if(valorReSenha == 0 && valorSenha == 0) {
            senha.classList.remove("incorreto");
            reSenha.classList.remove("incorreto");
            senha.classList.remove("correto");
            reSenha.classList.remove("correto");
        }
    })
    reSenha.addEventListener('blur', ()=> {
        valorSenha = senha.value;
        valorReSenha = reSenha.value;
        if (valorSenha == valorReSenha) {
            senha.classList.remove("incorreto");
            reSenha.classList.remove("incorreto");
            senha.classList.add("correto");
            reSenha.classList.add("correto");
        } else {
            senha.classList.remove("correto");
            reSenha.classList.remove("correto");
            senha.classList.add("incorreto");
            reSenha.classList.add("incorreto");
        }
        if(valorReSenha == 0 && valorSenha == 0) {
            senha.classList.remove("incorreto");
            reSenha.classList.remove("incorreto");
            senha.classList.remove("correto");
            reSenha.classList.remove("correto");
        }
    })
}

function sendRegister(form) {
    console.log(form);
    let forme = document.querySelector('form');
    let formData = new FormData(forme);
    console.log(formData);
		
		return;
}
