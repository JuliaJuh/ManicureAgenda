class AgendamentoView extends View {
    template(model) {
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
                ${model.paraArray().map(agenda => `
                        <tr>
                            <td>${agenda.nome}</td>
                            <td>${agenda.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                            <td>${agenda.hora}</td>
                            <td>${agenda.telefone}</td>
                            
                        <tr>
                     `).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }
}
