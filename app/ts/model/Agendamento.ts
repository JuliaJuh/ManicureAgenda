class Agendamento { //Criando uma classe

    //--------------------------------------------------------------------------------------------
           private _agendamento: Agendamento[] = [];
    //--------------------------------------------------------------------------------------------
    //Criando métodos da classe
           adiciona(agenda: Agendamento): void { //Método adiciona que recebe como paramêtro o objeto agendamento (tipagem)
    //Devolve nada, coloca void
            this._agendamento.push(agenda);
        }
           
     //Boa prática é dizer nos métodos o tipo que vc está devolvendo
                paraArray(): Agendamento[] { //Devolve um array de agendamento (Cria acesso a essa lista encapsulada )
                    return [].concat(this._agendamento); //Criando um novo array com conteudo do array Negociação. Pois se alterar o mesmo, não altera o novo, nem apaga. Porém esse novo array é do tipo any e esta inferindo e não pega os atributos da classe. Isso não flui de acordo. Aceita qualquer coisa.Por isso nos métodos sempre diga o que está devolvendo, que no caso seria o array de negociações
        }
    
    } //ola