// Elementos do DOM
const inputNovaTarefa = document.getElementById("novaTarefa")
const btnAdicionar = document.getElementById("btnAdicionar")
const listaTarefas = document.getElementById("listaTarefas")
const mensagemVazia = document.getElementById("mensagemVazia")

// Array para armazenar as tarefas
const tarefas = []

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
  const textoTarefa = inputNovaTarefa.value.trim()

  if (textoTarefa !== "") {
    // Adicionar a tarefa ao array
    tarefas.push(textoTarefa)

    // Limpar o input
    inputNovaTarefa.value = ""

    // Atualizar a interface
    atualizarInterface()

    // Focar no input para adicionar nova tarefa
    inputNovaTarefa.focus()
  }
}

// Função para remover uma tarefa
function removerTarefa(index) {
  // Remover a tarefa do array
  tarefas.splice(index, 1)

  // Atualizar a interface
  atualizarInterface()
}

// Função para atualizar a interface
function atualizarInterface() {
  // Limpar a lista de tarefas
  listaTarefas.innerHTML = ""

  // Verificar se há tarefas
  if (tarefas.length === 0) {
    mensagemVazia.classList.remove("escondido")
  } else {
    mensagemVazia.classList.add("escondido")

    // Adicionar cada tarefa à lista
    tarefas.forEach((tarefa, index) => {
      const tarefaItem = document.createElement("div")
      tarefaItem.className = "tarefa-item"

      const textoTarefa = document.createElement("span")
      textoTarefa.textContent = tarefa

      const btnRemover = document.createElement("button")
      btnRemover.className = "btn-remover"
      btnRemover.innerHTML =
        '<svg class="icone-lixeira" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>'
      btnRemover.setAttribute("aria-label", "Remover tarefa")
      btnRemover.onclick = () => removerTarefa(index)

      tarefaItem.appendChild(textoTarefa)
      tarefaItem.appendChild(btnRemover)

      listaTarefas.appendChild(tarefaItem)
    })
  }
}

// Event listeners
btnAdicionar.addEventListener("click", adicionarTarefa)

inputNovaTarefa.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adicionarTarefa()
  }
})

// Inicializar a interface
atualizarInterface()

// Focar no input ao carregar a página
window.onload = () => {
  inputNovaTarefa.focus()
}
