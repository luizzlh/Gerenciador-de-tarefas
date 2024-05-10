const input = document.getElementById("input")
const btnInserir = document.getElementById("btnInserir")
const caixaTarefas = document.getElementById("caixaTarefas")

btnInserir.addEventListener("click", (evt) => {
    if (input.value) {
        const novaTarefa = document.createElement("div")
        novaTarefa.classList.add("tarefaAdicionada")
        novaTarefa.innerHTML = `<span class="">${input.value}</span>
        <div class="icones">
        <img class="iconeConcluido" src="icones/concluido.svg" alt="">
        <img class="iconeLixeira" src="icones/lixeira.svg" alt="">
        </div>
        `
        caixaTarefas.appendChild(novaTarefa)
        input.value=""
        input.focus()
    }
})

document.addEventListener("click",(evt)=>{
    if(evt.target.classList == "iconeLixeira"){
        caixaTarefas.removeChild(evt.target.parentNode.parentNode)
    }
})

document.addEventListener("click",(evt)=>{
    if(evt.target.classList == "iconeConcluido"){
        const texto = evt.target.parentNode.previousElementSibling
        texto.classList.toggle("tarefaConcluida")
    }
})