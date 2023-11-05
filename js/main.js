const form = document.getElementById("novoItem")
const lista = documento.getElementById('lista')
const items = JSON.parse(localStorage.getItem("items"))

items.forEach((elemento) => {
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = items.find(elemento => elemento.nome == nome.value)

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe){
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
    }
    else{

        itemAtual.id = items.legth
        criaElemento(itemAtual)
        items.push[itemAtual]
    }

 

    

    localStorage.setItem("items", JSON(items))
 
    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item){

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)
}

function atualizaElemento(item){
    document.querySelector("[data-id="+item.if+"]").innerHTML = inner.quantidade
}