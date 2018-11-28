class AgendamentoView extends View<Agendamento> {

    template(model: Agendamento): string { //Template string retorna uma string com a estrutura da tabela. Utilizamos pela comunidade de quebras de linha, além de permitir interpolações sem o uso do operador +. Concatena seu usar o operador +

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(agenda => //criando uma expressão ${} buscar por cada array, mapeando as strings que representam uma tr. Cada item do meu array que representa a negociação 
                     `
                        <tr>
                            <td>${agenda.nome}</td>   
                            <td>${agenda.data.getDate()}/${agenda.data.getFullYear()}</td>
                            <td>${agenda.hora}</td>
                            <td>${agenda.telefone}</td>
                        <tr>
                     `   
                ).join('')}   //Concatenar todas as stings geradas para uma strings          
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }
}