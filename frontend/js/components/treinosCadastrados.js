export function treinosCadastrados() {
    return `
    <div class="container">
        <div class="containerPesquisa">
            <input type="text" class="barraDePesquisa" name="pesquisa" placeholder="Pesquisar exercício..." />
        </div> 
    </div>
    `
}


// Estrutura original:
//  <div class="container">
//         <div class="containerPesquisa">
//             <input type="text" class="barraDePesquisa" name="pesquisa" placeholder="Pesquisar exercício..." />
//         </div>
//         <div class="componenteDeExercicio" draggable=true>
//             <p class="nomeDoExercicio"></p>
//             <input type="number" name="series" placeholder="Séries" required />
//             <input type="number" name="repeticoes" placeholder="Reps" required />
//         </div>
//     </div>