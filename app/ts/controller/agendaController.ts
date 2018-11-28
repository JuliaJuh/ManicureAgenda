class AgendaController {

    private _inputNome: JQuery; 
    private _inputData: JQuery;
     private _inputHora: JQuery;
     private _inputTelefone: JQuery;
     private _agendamento = new Agendamento(); // O Compilador do TypeScript é inteligente o suficiente para entender que, se estamos criando uma instância de Negociacoes, a propriedade não tipada que receber seu valor assumirá o tipo Negociacoes.
     private _agendamentoView = new AgendamentoView('#agendamentoView');//Passando o seletor css do elemento do html no qual vou inserir o tamplate
     private _mensagemView = new MensagemView('#mensagemView');
     //Renderizar = gerar
     //----------------------------------------------------------------------------------------------------------
     constructor() {

        this._inputNome = $('#nome'); 
        this._inputData = $('#data');
         this._inputHora = $('#hora');
         this._inputTelefone = $('#telefone');
         this._agendamentoView.update(this._agendamento); //Assim que a página for recarregada, vai mostrar as tabelas
     
     }
 //----------------------------------------------------------------------------------------------------------
     adiciona(event: Event) { 
 
         event.preventDefault(); 
 
             const agenda = new Agenda(
                (this._inputNome.val()), 
                new Date(this._inputData.value.replace(/-/g, ',')), //Vai pegar por todo campo o que tiver hínfen, e colocar virgula
                 parseInt(this._inputHora.val()),
                 parseInt(this._inputTelefone.val())); 
 
                 this._agendamento.adiciona(agenda);//Método que me da acesso ao array que negociações esta encapsulando, passando a instância de negociação
 
 
                 this._agendamentoView.update(this._agendamento);
                 this._mensagemView.update('Agendamento adicionado com sucesso!');
             
      }
 }