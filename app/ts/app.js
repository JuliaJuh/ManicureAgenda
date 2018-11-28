const controller = new AgendaController();
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));