console.log('Script filmes.js carregado');

const form = document.getElementById('form-filme');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {

    event.preventDefault(); 

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const genero = document.getElementById('genero').value;
    const classificacao = document.getElementById('classificacao').value;
    const duracao = Number(document.getElementById('duracao').value);
    const dataEstreia = document.getElementById('dataEstreia').value;

    const filme = {
        titulo: titulo,
        descricao: descricao,
        genero: genero,
        classificacao: classificacao,
        duracao: duracao,
        dataEstreia: dataEstreia
    };

    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];

    filmes.push(filme);

    localStorage.setItem('filmes', JSON.stringify(filmes));

    mensagem.innerHTML = `Filme "<strong>${filme.titulo}</strong>" salvo com sucesso!`;
    mensagem.className = 'alert alert-success mt-3';

    form.reset();

    setTimeout(() => {
        mensagem.innerHTML = '';
        mensagem.className = 'mt-3';
    }, 3000);

    console.log("Filmes salvos no localStorage:", localStorage.getItem('filmes'));
});