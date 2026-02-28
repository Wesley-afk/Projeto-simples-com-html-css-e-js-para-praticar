let formularioDeCadastrarTreino = document.querySelector('.formularioParaCadastrarTreino');

let treinos = [];
const campo = document.querySelector('.treinosCadastrados');

formularioDeCadastrarTreino.addEventListener('submit', function (event) {
    event.preventDefault();
    treinos.push(event.target.nome.value);
    console.log('Formulário enviado', treinos);
    event.target.nome.value = ''; 
    MostrarTreino();
})

function MostrarTreino() {
    campo.innerHTML = '';
    
    treinos.forEach((treino, index) => {
        console.log('index no valor: ' + index)

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
            index = index - 1;
            MostrarTreino(); 
        });

        // Editar treino
        botaoEditarTreino.addEventListener('click', function () {
            treinos[index] = prompt('Qual é o novo nome?', treino);
            MostrarTreino(); 
        });
    }
    );
}