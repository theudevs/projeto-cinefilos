console.log('Script sessoes.js carregado');

const form = document.getElementById('form-sessao');
const mensagem = document.getElementById('mensagem');
const selectFilme = document.getElementById('filme');
const selectSala = document.getElementById('sala');

function carregarSelects() {

    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    selectFilme.innerHTML = '<option value="">Selecione um filme...</option>';
    filmes.forEach(filme => {
        const option = document.createElement('option');
        option.value = filme.titulo;
        option.textContent = filme.titulo;
        selectFilme.appendChild(option);
    });

    const salas = JSON.parse(localStorage.getItem('salas')) || [];
    selectSala.innerHTML = '<option value="">Selecione uma sala...</option>';
    salas.forEach(sala => {
        const option = document.createElement('option');
        option.value = sala.nome;
        option.textContent = `${sala.nome} (${sala.tipo})`;
        selectSala.appendChild(option);
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const filme = selectFilme.value;
    const sala = selectSala.value;
    const dataHora = document.getElementById('dataHora').value;
    const preco = Number(document.getElementById('preco').value);
    const idioma = document.getElementById('idioma').value;
    const formato = document.getElementById('formato').value;

    const sessao = {
        filme: filme,
        sala: sala,
        dataHora: dataHora,
        preco: preco,
        idioma: idioma,
        formato: formato
    };

    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    sessoes.push(sessao);
    localStorage.setItem('sessoes', JSON.stringify(sessoes));

    mensagem.innerHTML = `Sessão para o filme <strong>${filme}</strong> salva com sucesso!`;
    mensagem.className = 'alert alert-success mt-3';
    form.reset();
    
    setTimeout(() => {
        mensagem.innerHTML = '';
        mensagem.className = 'mt-3';
    }, 3000);

    console.log("Sessões salvas:", localStorage.getItem('sessoes'));
});

carregarSelects();