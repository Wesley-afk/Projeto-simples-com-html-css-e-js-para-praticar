const formularioParaLogin = document.querySelector('.formularioParaLogar');
const campo = document.querySelector('input');

formularioParaLogin.addEventListener('submit', async function (event) {
    event.preventDefault();

    const nomeDoUsuario = event.target.nomeDoUsuario.value;
    const senhaDoUsuario = event.target.senhaDoUsuario.value;

    const resposta = await fetch('http://localhost:3000/logarUsuario',{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({nomeDoUsuario, senhaDoUsuario})
    })

    if(resposta.status === 200){
        alert('Bem vindo, usuário')
        campo.value = ''
        window.location.href = 'index.html'
    } else{
        alert('Algo deu errado, tente novamente')
        console.log('Algum erro ocorreu internamente no servidor')
    }
});