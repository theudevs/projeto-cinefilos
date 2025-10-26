console.log('Script venda.js carregado');

const form = document.getElementById('form-venda');
const mensagem = document.getElementById('mensagem');
const selectSessao = document.getElementById('sessao');

function carregarSessoes() {
    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    selectSessao.innerHTML = '<option value="">Selecione uma sessão...</option>';

    sessoes.forEach((sessao, index) => {
        const option = document.createElement('option');

        option.value = index; 

        const dataFormatada = new Date(sessao.dataHora).toLocaleString('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short'
        });

        option.textContent = `${sessao.filme} (${sessao.sala}) - ${dataFormatada}`;
        selectSessao.appendChild(option);
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const sessaoIndex = selectSessao.value;
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const assento = document.getElementById('assento').value;
    const pagamento = document.getElementById('pagamento').value;

    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    const sessaoSelecionada = sessoes[sessaoIndex];

    const ingresso = {
        sessao: sessaoSelecionada,
        nomeCliente: nome,
        cpfCliente: cpf,
        assento: assento,
        tipoPagamento: pagamento
    };

    const ingressos = JSON.parse(localStorage.getItem('ingressos')) || [];
    ingressos.push(ingresso);
    localStorage.setItem('ingressos', JSON.stringify(ingressos));

    mensagem.innerHTML = `Ingresso para <strong>${ingresso.sessao.filme}</strong> vendido com sucesso para <strong>${ingresso.nomeCliente}</strong>!`;
    mensagem.className = 'alert alert-success mt-3';
    form.reset();
    
    setTimeout(() => {
        mensagem.innerHTML = '';
        mensagem.className = 'mt-3';
    }, 4000);

    console.log("Ingressos salvos:", localStorage.getItem('ingressos'));
});

carregarSessoes();