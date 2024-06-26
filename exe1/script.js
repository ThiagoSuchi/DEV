let a = window.document.getElementById('area');
//window.document.getElementById. Sua função simplesmente retorna o elemento cujo atributo ID foi especificado, ou seja, Retorna a referência do elemento através do seu ID.

function clicar() {
   a.innerText = 'Clicou!' // .innerText é uma propriedade que representa o conteúdo textual "renderizado" de um nó e seus descendentes.
   a.style.background = 'green' // .style.background muda a cor do container indicado, no caso 'a'.
}

function entrar() {
   a.innerText = '- Entrou -'
}

function sair() {
   a.innerText = '- Saiu -'
   a.style.background = 'gray' 
}