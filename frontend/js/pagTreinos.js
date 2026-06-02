// JS da página de treinos  
import { treinosCadastrados } from "./components/treinosCadastrados.js";
const botao = document.querySelector('.botaoAdicionar');
const treinos = document.getElementById('treinosCadastradosContainer');

// Preencher a div no html
treinos.innerHTML = treinosCadastrados();
const campoNomeExercicio = document.querySelector('.nomeDoExercicio');
const seriesExercicio = document.querySelector('.seriesDoExercicio .valor');
const repeticoesDoExercicio = document.querySelector('.repeticoesDoExercicio .valor');


const container = document.querySelector('.container');


// Para o kanbam
const pegarTreino = document.querySelectorAll('.componenteDeExercicio');
const colocarTreino = document.querySelector('.caixaDeTreino');
let elementoCapturado = null;

// Deixar e não deixar o componente q mostra os exercícios visíveis
botao.addEventListener('click', () => {
    treinos.classList.toggle('visivel');
})

// Preencher o componente de mostrar exercícios:
// Puxar treino do banco

async function mostrarTreinos() {
    const requisicao = await fetch('http://localhost:3000/treinos');
    let resposta = await requisicao.json();
    console.log(resposta)

    // Colocar o nome, repetições e séries no componente de exercícios
    resposta.forEach(e => {

        const exercicio = document.createElement('div');
        exercicio.draggable = true;
        exercicio.classList.add('componenteDeExercicio');

        exercicio.innerHTML = `
        <p>${e.nome}</p>
        <p>${e.series}</p>
        <p>${e.repeticoes}</p>
        `

        container.appendChild(exercicio);

        console.log('Cards encontrados: ' + pegarTreino.length)

        exercicio.addEventListener('dragstart', e => {
            elementoCapturado = e.currentTarget;
            console.log(elementoCapturado)
            elementoCapturado.classList.add('dragging');
        })

        exercicio.addEventListener('dragend', e => {
            elementoCapturado.classList.remove('dragging');
        })
    });
}

// Agora eu tenho que salvar isso acontecendo, ou seja, relacionar o treino com a ficha 

mostrarTreinos();

colocarTreino.addEventListener('dragover', e => {
    e.preventDefault();
})

colocarTreino.addEventListener('drop', e => {
    colocarTreino.appendChild(elementoCapturado) 
})

// Para conseguir devolver os cards

container.addEventListener('dragover', e => {
    e.preventDefault();
})

container.addEventListener('drop', e => {
    container.appendChild(elementoCapturado)
})