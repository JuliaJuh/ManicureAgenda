
const controller = new AgendaController(); //Meu APP.TS vai criar uma instancia de agenda contoller
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller)); //Passando o método adiciona do controller para o meu DOCUMENT.
// Esse bind(controller) mantem a associação do THIS do adiciona no meu CONTROLER (ECMA script purin) 
