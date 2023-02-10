var prompt = require('prompt-sync')();

let question = prompt('Bem vindo ao armazém de propriedades do CSS, quer armazenar? (s/n) ');

const armazem = [];

while(question != "n"){

    if(question == "s"){

        var propriedadeCSS = prompt('Qual é a propriedade do CSS? ')

        if(propriedadeCSS == "sair"){
            return;
        }
        armazem.push(propriedadeCSS)
        armazem.sort()
        console.log(armazem)

    } else{
        console.log('Você escreveu (' + question + '), escreva apenas (s/n)!')
        break;
    }
}