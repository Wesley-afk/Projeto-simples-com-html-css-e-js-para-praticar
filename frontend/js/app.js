// O . no querySelector indica classe
const formularioDeCadastrarTreino = document.querySelector('.formularioParaCadastrarTreino'); 

const campo = document.querySelector('.treinosCadastrados');

MostrarTreino();


async function MostrarTreino() {
    const requisicao = await fetch('http://localhost:3000/treinos');
    let resposta = await requisicao.json();

    campo.innerHTML = '';
    resposta.forEach((treino) => {
        const li = document.createElement('li');
        const botaoEditarTreino = document.createElement('button');
        const botaoExcluirTreino = document.createElement('button');
        const span = document.createElement('span'); //Criando um span para colocar o nome do treino

        span.textContent = treino.nome; //Apenas o texto vai para o span

        campo.appendChild(li);
        li.appendChild(span);
        li.appendChild(botaoEditarTreino);
        li.appendChild(botaoExcluirTreino);

        botaoEditarTreino.textContent = 'Editar treino';
        botaoExcluirTreino.textContent = 'Excluir treino';

        botaoExcluirTreino.addEventListener('click', () => {
            excluirTreino(treino.id);
        });
        botaoEditarTreino.addEventListener('click', () => {
            const novoNome = prompt('Qual será o nome novo do treino', treino.nome);

            editarTreino(treino.id, novoNome);
        });
    })
}

// Adicionar um treino
formularioDeCadastrarTreino.addEventListener('submit', async function cadastrarTreino(event) {
    event.preventDefault();

    const nomeTreino = event.target.nome.value;

    const req = await fetch('http://localhost:3000/CadastrarTreinos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: nomeTreino })
    });

    // Limpo o campo
    event.target.nome.value = '';

    // Atualizo a tela
    MostrarTreino();
})

// Fazer o deletar treino e editar treino

async function excluirTreino(id) {
    await fetch(`http://localhost:3000/deletarTreino/${id}`, {
        method: 'DELETE'
    });

    MostrarTreino();
}

async function editarTreino(id, novoNome) {
    await fetch(`http://localhost:3000/editarTreino/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        // Transformo meu obj js em um json(texto) para a rede entender e envio
        body: JSON.stringify({
            nome: novoNome
        })
    })
    MostrarTreino();
}