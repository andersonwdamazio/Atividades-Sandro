//------------------------------------------------------------------- :) ;D 
//--------------------- BANCO MEGA BRAIN ---------------------------- :) ;D
//------------------------------------------------------------------- :) ;D
// importando o readline pra poder ler o que o usuario digita no terminal
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// dados da conta ai oh fixos, só pra exibir)
const titular = 'Tiago FISH';
const agencia = '0001';
const numeroConta = '12345-6';
0
// saldo inicial, essa variavel vai mudando conforme debita/credita
let saldo = 1000;

// funcao pra formatar em R$ 
function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

// funcao do menu, ela chama ela mesma no final pra ficar em loop
function menu() {
  console.log('\n--- MENU ---');
  console.log('1-Dados  2-Saldo  3-Sacar  4-Depositar  0-Sair');

  rl.question('Opção: ', (opcao) => {

    // opção 1 - mostrar os dados da conta
    if (opcao === '1') {
      console.log(`Titular: ${titular} | Agência: ${agencia} | Conta: ${numeroConta}`);
      menu();

    // opção 2 - mostrar o saldo formatado
    } else if (opcao === '2') {
      console.log('Saldo: ' + formatarMoeda(saldo));
      menu();

    // opção 3 - debitar (tira do saldo)
    } else if (opcao === '3') {
      rl.question('Valor a sacar: ', (valor) => {
        valor = parseFloat(valor); // transforma o texto digitado em numero

        // checa se tem saldo suficiente antes de debitar (bonus da atividade)
        if (valor > saldo) {
          console.log('Saldo insuficiente!');
        } else {
          saldo -= valor;
          console.log('Novo saldo: ' + formatarMoeda(saldo));
        }
        menu();
      });

    // opção 4 - creditar (soma no saldo)
    } else if (opcao === '4') {
      rl.question('Valor a depositar: ', (valor) => {
        saldo += parseFloat(valor);
        console.log('Novo saldo: ' + formatarMoeda(saldo));
        menu();
      });

    // opção 0 - sair do programa
    } else if (opcao === '0') {
      console.log('Até mais!');
      rl.close(); // fecha o readline e encerra o programa

    // qualquer outra coisa digitada cai aqui
    } else {
      console.log('Opção inválida!');
      menu();
    }
  });
}

// chama o menu a primeira vez pra começar o programa, porque é tipo no html, ele le tudo primeira e depois executa
menu();

//SÓ chamar no Node banco.js e vai rodar o programa, 
// ai é só digitar as opções do menu e ver o saldo mudar conforme 
// debita/credita