var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //Evento de input é para escutar o campo que vai ser inserido
    
   var clientes = document.querySelectorAll(".cliente");

    if(this.value.length > 0){ //Se algo for digitado no campo filtre, ele var fazer esse if, for e osoutros if, dependendo dda situação.
       for(var i = 0; i < clientes.length ; i++){
           var cliente = clientes[i]; //paciente é o item que está passando do array no índice 'i'
           var tdNome = cliente.querySelector(".info-nome");
           var nome = tdNome.textContent;
           var expressao = new RegExp(this.value, "i");//NEW REGEXP-Objeto busca pelo meu conteudo de texto do campo/// E o i é indicando que quer procurar minusculo ou maiusculo, de case-Insensitive
         
              
            if(!expressao.test(nome)){ //É para testar se no meu nome terá pelo menos um pedacinho da tal expressão que estou digitandos. Ela vai inversa, pois se encontrar, acontece o 1º if, caso contrário, o 2º. expressões regulares
            cliente.classList.add("invisivel"); //Adiciona a classe invisível caso digite o nome de alguem que seja diferente do que esta na tabela
        } else {
            cliente.classList.remove("invisivel"); //Remove a classe invisível caso digite o nome de alguem que seja igual do que esta na tabela
        }
     }
   }else{ //Se nada for digitado ou o campo que de filtro for apagado o que for digitado, retorna sem a invisbilidade
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        cliente.classList.remove("invisivel");
       }
    }
});