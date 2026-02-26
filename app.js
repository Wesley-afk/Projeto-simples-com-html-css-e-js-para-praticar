let formularioDeCadastrarTreino = document.querySelector('.formularioParaCadastrarTreino');

let treinos = [];
const campo = document.querySelector('.treinosCadastrados');
let cont = 0;

formularioDeCadastrarTreino.addEventListener('submit', function (event) {
    event.preventDefault();
    treinos.push(event.target.nome.value);
    mostrarTreino();
    console.log('Formulário enviado', treinos);
    event.target.nome.value = '';
});

function mostrarTreino() {

    for (let index = cont; index < treinos.length; index++) {
        const li = document.createElement('li');
        const botaoEditarTreino = document.createElement('button');
        const botaoExcluirTreino = document.createElement('button');
        li.textContent = treinos[index];

        campo.appendChild(li);
        li.appendChild(botaoEditarTreino);
        li.appendChild(botaoExcluirTreino);

        botaoEditarTreino.textContent = 'Editar treino';
        botaoExcluirTreino.textContent = 'Excluir treino';

        // Deletar treino
        botaoExcluirTreino.addEventListener('click', function () {
            treinos.splice(index, 1);
            cont = 0;
            campo.textContent = '';
            li.textContent = '';
            mostrarTreino();
        });

        // Editar treino
        botaoEditarTreino.addEventListener('click', function () {
            treinos[index] = prompt('Qual é o novo nome?', treinos[index]);
            cont = 0;
            campo.textContent = '';
            li.textContent = '';
            mostrarTreino();
        });

    }
    // se treinos == 0 o cont vai valer zero se não a contagem continua
    treinos.length === 0 ? cont = 0 : cont = cont + 1;
}