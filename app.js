var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() //open history file
  });


let question = prompt('Bem vindo ao armazém de propriedades do CSS, quer armazenar? (s/n) ')
const armazem = [];

if(question == 's'||'n'){
    
    while(question != "n"){
        
        if(question == "s"){
            
            var propriedadeCSS = prompt('Qual é a propriedade do CSS? ')
            
            if(propriedadeCSS == "SAIR"){
                return;
            }
            armazem.push(propriedadeCSS)
            armazem.sort()
            console.log(armazem)
            
        }
        
    }
}else{
    console.log('Você escreveu (' + question + '), escreva apenas (s/n), agora aperte CTRL + C para voltar a pergunta!')
}


// armazem.history.save()

