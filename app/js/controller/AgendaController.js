class AgendaController {
    //----------------------------------------------------------------------------------------------------------
    constructor() {
        //=========Instanciando os elementos para ter acesso ao DOM ======================
        this._agendamento = new agendamento();
        this._agendamentoView = new agendamentoView('#agendamentoView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputNome = document.querySelector('#nome');
        this._inputData = document.querySelector('#data'); 
        this._inputHora = document.querySelector('#hora');
        this._inputTelefone = document.querySelector('#telefone');
        this._agendamentoView.update(this._agendamento);
    }
    //----------------------------------------------------------------------------------------------------------
    adiciona(event) {
        event.preventDefault(); 
       const agenda = new Agenda(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
       this._agendamento.adiciona(agenda);
        this._agendamentoView.update(this._agendamento);
        this._mensagemView.update('Agendamento adicionado com sucesso!');
       
    }
}
//---------------------------------------------------------------------------------------------------------- 
