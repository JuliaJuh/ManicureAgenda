//console.log("Buscarei os Pacientes!");

var botaoAdicionar = document.querySelector("#buscar-clientes");

botaoAdicionar.addEventListener("click", function(){
 
    var xhr = new XMLHttpRequest(); //Um objeto do JavaScript RESPONSÁVEL DE FAZER REQUISIÇÕES HTTP. XML faz o transporte de dados do tipo XML mas hj em dia consegue trafegar outros tipos de dados tbm.
    //****https://api-pacientes.herokuapp.com/pacientes //Esse endereço é uma API, uma interface de programação que disponibiliza os dados para o usuário. Não pode ser o navegador para trazer as informações desse lado para a nossa página. E sim o próprio JS****

        xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//Abrindo a conexão para o endereço que queremos fazer/// Primeiro passo é expecificar qual tipo de requisição queremos fazer. Requisição tradicional, tipo GET para algum endereço

        xhr.addEventListener("load", function(){ //Quando o xhr tiver as respostas carregadas, excecuta uma função para mim
    
        
           var erroAjax = document.querySelector("#erro-ajax");

           if (xhr.status == 200) { //Se for aquele codigo de erro será o 404 e de ok, 200
               erroAjax.classList.add("invisivel");
               var resposta = xhr.responseText;
               var clientes = JSON.parse(resposta);
   
               clientes.forEach(function(cliente) {
                   adicionaClienteNaTabela(cliente);
               });
           } else {
               erroAjax.classList.remove("invisivel"); //CASO OCORRA ALGUM ERRO, A CLASSE INVISIVEL É RETIRADA
           }
       });

        xhr.send();//Pega a requisção que acabamos de criar e envia ela 

});

//JSON -> É um JavaScript Object Notation - Um formato de dados parecidos com os objetos do JavaScript que podemos transportar pela web.
/* A semelhança é tanta que podemos facilmente converter JSON (o texto da resposta da requisição)
 em objetos do JavaScript com os quais estamos mais acostumados a utilizar, como array ou mesmo uma 
 string. Queremos que ele seja transformado em um array de objetos, mais útil para o JS. */