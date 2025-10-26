console.log('Script salas.js carregado');

const form = document.getElementById('form-sala');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const capacidade = Number(document.getElementById('capacidade').value);
    const tipo = document.getElementById('tipo').value;

    const sala = {
        nome: nome,
        capacidade: capacidade,
        tipo: tipo
    };

    const salas = JSON.parse(localStorage.getItem('salas')) || [];

    salas.push(sala);

    localStorage.setItem('salas', JSON.stringify(salas));

    mensagem.innerHTML = `Sala "<strong>${sala.nome}</strong>" salva com sucesso!`;
    mensagem.className = 'alert alert-success mt-3';

    form.reset();

    setTimeout(() => {
        mensagem.innerHTML = '';
        mensagem.className = 'mt-3';
    }, 3000);

    console.log("Salas salvas no localStorage:", localStorage.getItem('salas'));
});