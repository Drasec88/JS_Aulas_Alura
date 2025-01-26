let listaDeNumerosSorteados = [];
let numeroLimite = 10;

// Criando uma função para gerar um número aleatório
/**
 * Função para gerar um número aleatório entre 0 e 9 que não tenha sido sorteado anteriormente.
 * @returns {number} - Número aleatório único.
 */
function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite +1);
    let listaDeElementosNaLista = listaDeNumerosSorteados.length;

    if (listaDeElementosNaLista === numeroLimite) {       
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
            
        }
        return numeroEscolhido;
    }
  
  
  // Criando uma variável para armazenar o número secreto
  let numeroSecreto = gerarNumeroAleatorio();
  
  // Criando uma variável para armazenar o número de tentativas
  let tentativas = 1;
  
  // Criando uma função para exibir o texto na tela
  function exibirTextoNaTela(tag, texto) {
      let campo = document.querySelector(tag);
      campo.innerHTML = texto;
      responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3} );
  }
  
  // Exibindo o texto na tela
  exibirTextoNaTela('h1', 'Jogo do número Secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 0 e 10');
  
  // Criando uma função para limpar o campo de input
  function limparCampo() {
      document.querySelector('input').value = '';
  }
  
  // Criando uma função para verificar o chute do usuário
  function verificarChute() {
      let chute = parseInt(document.querySelector('input').value);
  
  // Verificando se o chute é igual ao número secreto    
      if (chute === numeroSecreto) {
          exibirTextoNaTela('h1', 'Acertou!');
  // Verificando se o usuário acertou na primeira tentativa        
          let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
  
          let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
          exibirTextoNaTela('p', mensagemTentativas);
          document.getElementById('reiniciar').removeAttribute('disabled');
  
      } else if (chute > numeroSecreto) {
          exibirTextoNaTela('h1', 'Errou!');
          exibirTextoNaTela('p', 'O número secreto é menor');
      } else {
          exibirTextoNaTela('h1', 'Errou!');
          exibirTextoNaTela('p', 'O número secreto é maior');
      }
      limparCampo();    
      tentativas++;
  }
  
  // Criando uma função para reiniciar o jogo
  function reiniciarJogo() {
      numeroSecreto = gerarNumeroAleatorio();
      limparCampo();
      tentativas = 1;
      exibirTextoNaTela('h1', 'Jogo do número Secreto');
      exibirTextoNaTela('p', 'Escolha um número entre 0 e 10');
      document.getElementById('reiniciar').setAttribute('disabled', true);
  }
  


