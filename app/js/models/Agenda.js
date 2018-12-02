class Agenda {
    constructor(nome, data, hora, telefone) {
      
        //----------------------------------------------------------------------------------------------------
        //Guarda dentro da propriedade de instancia da própria classe
        this._nome = nome;
        this._data = data; //RECEBE O QUE RECEBEU NO CONSRUTOR
        this._hora = hora; //RECEBE O QUE RECEBEU NO CONSRUTOR
        this._telefone = telefone; //RECEBE O QUE RECEBEU NO CONSRUTOR
        //Esses underline são convenções no java script que diz que essas propriedades não podem ser alteradas fora dos métodos da própria classe
    }
    //----------------------------------------------------------------------------------------------------
    //--------- Minhas Propriedades de Acesso --------
    // Pois não posso acessar as convenções acima, então crio minhas propriedades para ter acesso
    get nome() {
        return this._nome;
    }

    get data() {
            return this._data;
        }
    
        get hora() {
            return this._hora;
        }
    
        get telefone() {
            return this._telefone;
        }
    
}
