// JS da página de treinos
import { treinosCadastrados } from "./components/treinosCadastrados.js";
const botao = document.querySelector('.botaoAdicionar');
const treinos = document.getElementById('treinosCadastradosContainer');

// Preencher a div no html
treinos.innerHTML = treinosCadastrados();
const campoNomeExercicio = document.querySelector('.nomeDoExercicio');
const seriesExercicio = document.querySelector('.seriesDoExercicio .valor');
const repeticoesDoExercicio = document.querySelector('.repeticoesDoExercicio .valor');

// Deixar e não deixar o componente q mostra os exercícios visíveis
botao.addEventListener('click', () => {
    treinos.classList.toggle('visivel');
})

// Preencher o componente de mostrar exercícios:
// Puxar treino do banco

async function mostrarTreinos() {
    const requisicao = await fetch('http://localhost:3000/treinos');
    let resposta = await requisicao.json(); 

    // Colocar o nome, repetições e séries no componente de exercícios
    resposta.forEach(e => {
        campoNomeExercicio.innerHTML = e.nome;
        seriesExercicio.innerHTML = e.series;
        repeticoesDoExercicio.innerHTML = e.repeticoes;
    });
}

mostrarTreinos();