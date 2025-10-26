console.log('Script lista-sessoes.js carregado');

const containerSessoes = document.getElementById('lista-sessoes');

const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];

if (sessoes.length === 0) {
    containerSessoes.innerHTML = '<p class="col-12 alert alert-warning">Nenhuma sessão disponível no momento.</p>';
} else {

    const cardsHTML = sessoes.map((sessao, index) => {

        const dataFormatada = new Date(sessao.dataHora).toLocaleString('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short'
        });

        return `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${sessao.filme}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${sessao.sala} (${sessao.formato})</h6>
                        <p class="card-text">
                            <strong>Data:</strong> ${dataFormatada}<br>
                            <strong>Preço:</strong> R$ ${sessao.preco.toFixed(2)}<br>
                            <strong>Idioma:</strong> ${sessao.idioma}
                        </p>
                        <a href="venda-ingressos.html?sessaoIndex=${index}" class="btn btn-primary">Comprar Ingresso</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    containerSessoes.innerHTML = cardsHTML;
}