var botaoAdicionar = document.querySelector("#adicionar-cliente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
 
  //------Pegando os dados do Form---------- 

    var cliente = obtemClienteDoFormulario(form);

   var erros = validaCliente(cliente);

if (erros.length > 0) {
    exibeMensagensDeErro(erros);

    return;
}

adicionaClienteNaTabela(cliente);

form.reset();

var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";

});

function obtemClienteDoFormulario(form){
//------Pegando os dados do Form---------- 
//Características do cliente

// **Criando um objeto em Java Script**
    var cliente = {
        nome: form.nome.value,
        data: form.dia.value,
        horario: form.hora.value,
        telefone: form.telefone.value
    } //As chaves são propriedades, características do meu objeto
    
    return cliente;
}

function montaTr(cliente){
//------Criando uma TR (Linha)---------- 
    var clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");

    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(cliente.dia, "info-data"));
    clienteTr.appendChild(montaTd(cliente.hora, "info-hora"));
    clienteTr.appendChild(montaTd(cliente.telefone, "info-telefone"));

return clienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


function validaCliente(cliente){

    var erros = [];

    if (cliente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");//Push coloca a mensagem de erro dentro do array "ERROS"
    }

    if (cliente.dia.length == 0) {
        erros.push("A data não pode ser em branco");
    }

    if (cliente.hora.length == 0) {
        erros.push("O horário não pode ser em branco");
    }

    if (cliente.telefone.length == 0) {
        erros.push("O telefone não pode ser em branco");
    }

    return erros;
}


function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //Controla o HTML interno

    erros.forEach(function(erro) { //Para cada erro, faça a função que Recebe o item que passe, no caso 'erro'
        var li = document.createElement("li"); //Cria um elemento chamado 'LI' (tag)
        li.textContent = erro;
        ul.appendChild(li);
    });
} 

function adicionaClienteNaTabela(cliente) {
    var clienteTr = montaTr(cliente);
    var tabela = document.querySelector("#tabela-clientes");
    tabela.appendChild(clienteTr);
}

