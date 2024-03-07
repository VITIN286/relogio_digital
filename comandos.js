function atualizarPagina(){
    let display = document.querySelector('.display');

let agora = new Date()

let horario = zero(agora.getHours()) + ':' + zero(agora.getMinutes()) + ':' + zero(agora.getSeconds())

display.textContent = horario
}

function zero(numero){
    if (numero < 10){
        numero = '0' + numero
    }
    return numero
}

atualizarPagina();
setInterval(atualizarPagina, 1000);