alert('Bem vindo ao jogo dos números');
//gerar número aleatório de 1 a 10
//Math.random() gera um número aleatório entre 0 e 1

let numeroMaximo = 10
let numeroSecreto = parseInt(Math.random() * numeroMaximo ) +1 ;

let resposta = parseInt(prompt(`Digite um número de 1 a ${numeroMaximo}`));
let tentativas = 1;
//Enquanto a resposta não for igual ao número secreto, o loop continua
while(resposta !== numeroSecreto){

//se a resposta for maior que o número secreto, alerta que o número secreto é menor que a resposta
    if (resposta > numeroSecreto){
        alert(`O número secreto é menor que ${resposta}`);
    } else {
        alert(`O número secreto é maior que ${resposta}`);
    }
    tentativas++;
    resposta = Number(prompt(`Tentativa ${tentativas}. Escolha um número de 1 a 10:`));
}

let numeroTentativas = tentativas >1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} após ${tentativas} ${numeroTentativas}!`);

//se a resposta for igual ao número secreto, alerta que o número secreto é igual a resposta
//if (tentativas === 1){
//    alert(`Parabéns! Você acerto o número secreto ${numeroSecreto} com apenas uma tentativa!`);
//}else{
//    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} após ${tentativas} tentativas!`);
//}


