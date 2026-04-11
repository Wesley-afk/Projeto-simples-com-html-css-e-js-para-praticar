export function treinosCadastrados() { 
    return `
    <div class="container">
        <div class="containerPesquisa">
            <input type="text" class="barraDePesquisa" name="pesquisa" placeholder="Pesquisar exercício..."/> 
        </div>
            <div class="componenteDeExercicio">
                <p class="nomeDoExercicio"></p>
                <p class="seriesDoExercicio">Séries: <span class="valor"></span></p>
                <p class="repeticoesDoExercicio">Reps: <span class="valor"></span></p>
            </div>    
    </div> 
    `
}