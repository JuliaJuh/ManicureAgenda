var clientes = document.querySelectorAll(".cliente");

var tabela = document.querySelector("table"); //Eventing Bubble evento bolha, que vai dos filhos até os pais. Como um refrigerante em que as bolhas vão de baixo até o topo

tabela.addEventListener("dblclick", function(event){ //Chama o evento, no qual é declarado embaixo, como event.target
    
     event.target.parentNode.classList.add("fadeOut");
     
    setTimeout(function(){ ////Avisa ao JavaScript para segurar o que ele vai fazer um pouquinho, e depois que passar o tempo que indiquei, executa o conteúdo(função de tempo)
        event.target.parentNode.remove(); //Código resumido em uma linha
        },500); //aceita como parametro milisegundos 0,5 segundos tem 500 milisegundos
    });
